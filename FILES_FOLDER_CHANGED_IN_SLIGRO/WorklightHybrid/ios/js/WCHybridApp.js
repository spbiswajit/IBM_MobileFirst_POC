//-----------------------------------------------------------------
// Licensed Materials - Property of IBM
//
// WebSphere Commerce
//
// (C) Copyright IBM Corp. 2013, 2014 All Rights Reserved.
//
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with
// IBM Corp.
//-----------------------------------------------------------------

//*---------------------------------------------------------------------
//* The sample contained herein is provided to you "AS IS".
//*
//* It is furnished by IBM as a simple example and has not been
//* thoroughly tested
//* under all conditions.  IBM, therefore, cannot guarantee its
//* reliability, serviceability or functionality.
//*
//* This sample may include the names of individuals, companies, brands
//* and products in order to illustrate concepts as completely as
//* possible.  All of these names
//* are fictitious and any similarity to the names and addresses used by
//* actual persons
//* or business enterprises is entirely coincidental.
//*---------------------------------------------------------------------

window.$ = window.jQuery = WLJQ;

/**
 * Common Worklight initialization call
 */
function wlCommonInit() {
	var METHODNAME = "WCHybridAppJS.wlCommonInit ";
	if (wlInitOptions.enableLogger) {
		WL.Logger.debug(METHODNAME + "ENTRY");
	}
	langId = window.sessionStorage.getItem('langId');
	if (wlInitOptions.enableLogger) {
		WL.Logger.debug(METHODNAME + "langId(" + typeof langId + "): " + langId);
	}
	if (langId != null && langId != 'undefined' && (typeof langId) == 'string') {
		langId = parseInt(langId, 10);
	}
	if (wlInitOptions.enableLogger) {
		WL.Logger.debug(METHODNAME + "langId(" + typeof langId + "): " + langId);
	}
	MessagesJS.setLanguage(langId);
	if (wlInitOptions.enableLogger) {
		WL.Logger.debug(METHODNAME + "EXIT");
	}
}

/**
 * iOS environment specific Worklight initialization call
 * Setup the tab bar and options menu
 */
function wlEnvInit() {
	var METHODNAME = "WCHybridAppJS.wlEnvInit ";
	if (wlInitOptions.enableLogger) {
		WL.Logger.debug(METHODNAME + "ENTRY");
	}
	wlCommonInit();

	var clientEnv = WL.Client.getEnvironment();
	if (wlInitOptions.enableLogger) {
		WL.Logger.debug(METHODNAME + clientEnv + " environment initializing started");
	}

	WCHybridAppJS.createTabBar();
	WCHybridAppJS.updateTabState();
	WCHybridAppJS.updateNavBarState();

	if (wlInitOptions.enableLogger) {
		WL.Logger.debug(METHODNAME + clientEnv + " environment initialization completed");
		WL.Logger.debug(METHODNAME + "EXIT");
	}
}

/**
 * WCHybridAppJS contains iOS specific functions
 */
var WCHybridAppJS = (function() {

	var sessionStore = window.sessionStorage;
	var previewModeUrlParameters = "?newPreviewSession=true&previewToken=";
	var historyStackPrefix = "historyStack_";
	var isBackKeyPressed = false;
	var shouldClearHistory = false;

	//list of tab index values
	var featuredIndex = 0;
	var storesIndex = 1;
	var cartIndex = 2;
	var moreIndex = 3;
	var historyDisabled = 999; //use this value for base pages that do not require history

	return {

		/**
		 * Load the content for the tab
		 * @param targetUrl The base URL for the tab link
		 * @param tabIndex The tab index identifier
		 */
		loadTab: function(targetUrl, tabIndex, tabName) {
			var METHODNAME = "WCHybridAppJS.loadTab ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}

			WCHybridAppJS.updateSelectedTab(tabName);

			var historyKey = historyStackPrefix + tabIndex;
			//if the clicked tab is not the active tab, check if any history exists, and load it
			if (tabIndex != WCHybridAppJS.getCurrentTabIndex()) {
				//if tab has history, retrieve the history and pop the url for use
				var storedHistory = window.sessionStorage.getItem(historyKey);
				if (storedHistory !== null && typeof storedHistory !== "undefined") {
					var historyStack = JSON.parse(storedHistory);
					if (historyStack !== null && typeof historyStack !== "undefined" && historyStack.length > 0) {
						targetUrl = historyStack.pop();
						//update the history in storage
						window.sessionStorage.setItem(historyKey, JSON.stringify(historyStack));
					}
				}
			} else {
				//if the clicked tab is the currently active tab, clear the existing tab history since we are back at the top
				if (wlInitOptions.enableLogger) {
					WL.Logger.debug(METHODNAME + historyKey + " will be cleared on next updateHistory call");
				}
				shouldClearHistory = true;
			}

			//load the page
			window.location.href = targetUrl;

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}
		},

		/**
		 * Updates the history stacks for each tab and persists the history using HTML session storage.
		 * Called during the window's unload event. If back button is pressed, onBackKeyPress is called
		 * prior to the unload event.
		 */
		updateHistory: function() {
			var METHODNAME = "WCHybridAppJS.updateHistory ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}

			var historyStack;

			//find out which history stack to use
			var selectedTabIndex = WCHybridAppJS.getCurrentTabIndex();
			if (selectedTabIndex != null && typeof selectedTabIndex !== "undefined") {
				//check if history should be disabled
				if (selectedTabIndex != historyDisabled) {
					var historyKey = historyStackPrefix + selectedTabIndex;
					if (selectedTabIndex == cartIndex) {
						// if in the checkout flow, the back button is a direct return to the cart
						historyStack = [window.sessionStorage.getItem("ShoppingCartURL")];
					}
					else { //get the history from session storage
						var storedHistory = window.sessionStorage.getItem(historyKey);
						if (storedHistory !== null && typeof storedHistory !== "undefined") { //an existing history stack exists so we can use it
							historyStack = JSON.parse(storedHistory);
						} else {
							historyStack = []; //create a new array
						}

						if (isBackKeyPressed == false) {
							var currentURL = window.location.href;
							if (WCHybridAppJS.endsWith(currentURL, "#") == true) {
								currentURL = currentURL.substring(0,currentURL.length-1);
							}

							if (historyStack !== null && typeof historyStack !== "undefined" && historyStack[historyStack.length-1] != currentURL) {
								if (selectedTabIndex != cartIndex) { //do not append pages for checkout flow
									historyStack.push(currentURL);
								}
							}
						} else {
							isBackKeyPressed = false;
						}

						//check if clear history is needed, flag can be used to override
						if (shouldClearHistory == true) {
							if (wlInitOptions.enableLogger) {
								WL.Logger.debug(METHODNAME + "Clearing " + historyKey);
							}
							historyStack = [];
							shouldClearHistory = false;
						}
					}
					//update the history in storage
					if (wlInitOptions.enableLogger) {
						WL.Logger.debug(METHODNAME + "Updated contents of " + historyKey);
						for (var i in historyStack) {
							if (historyStack.hasOwnProperty(i)) {
								WL.Logger.debug(METHODNAME + "URL[" + i + "]: " + historyStack[i]);
							}
						}
					}
					window.sessionStorage.setItem(historyKey, JSON.stringify(historyStack));
				} else {
					if (wlInitOptions.enableLogger) {
						WL.Logger.debug(METHODNAME + "History is not maintained for this tab. No updates.");
					}
				}
			} else {
				if (wlInitOptions.enableLogger) {
					WL.Logger.debug(METHODNAME + "Selected tab is null or undefined. No updates.");
				}
			}

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}
		},

		/**
		 * Perform the actions when back button is pressed, either loading a page from history
		 * or displaying the exit confirmation dialog
		 */
		onBackKeyDown: function () {
			var METHODNAME = "WCHybridAppJS.onBackKeyDown ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}

			//find out which history stack to use
			var selectedTabIndex = WCHybridAppJS.getCurrentTabIndex();
			var historyKey = historyStackPrefix + selectedTabIndex;
			var storedHistory = window.sessionStorage.getItem(historyKey);
			if (storedHistory !== null && typeof storedHistory !== "undefined") {
				var historyStack = JSON.parse(storedHistory);
				if (historyStack.length > 0) {
					isBackKeyPressed = true;
					var prevUrl = historyStack.pop();
					//change page if the previous URL does not match the current page
					if (window.location.href != prevUrl) {
						window.location.href = prevUrl;
					} else {
						if (wlInitOptions.enableLogger) {
							WL.Logger.debug(METHODNAME + "No change in URL, skipping reload. Updating " + historyKey);
						}
						//if history is cleared, display exit dialog
						if (historyStack.length == 0) {
							if (wlInitOptions.enableLogger) {
								WL.Logger.debug(METHODNAME + "Removed the final item in the history stack, display prompt");
							}
							WCHybridAppJS.displayExitDialog();
						}
					}

					if (wlInitOptions.enableLogger) {
						if (historyStack.length == 0) {
							WL.Logger.debug(METHODNAME + "History stack is empty");
						} else {
							WL.Logger.debug(METHODNAME + "Contents of history stack:");
							for (var i in historyStack) {
								if (historyStack.hasOwnProperty(i)) {
									WL.Logger.debug(METHODNAME + "URL[" + i + "]: " + historyStack[i]);
								}
							}
						}
					}

					//update the stored history
					window.sessionStorage.setItem(historyKey, JSON.stringify(historyStack));

				} else if (window.location.protocol == "https:" && historyStack.length >= 0) {
					var currUrl = window.location.href;
					if (window.location.hash) {
						window.history.go(-2);
					} else {
						window.history.back();
					}
				} else {
					if (wlInitOptions.enableLogger) {
						WL.Logger.debug(METHODNAME + "At the top of the history stack, display prompt");
					}
					WCHybridAppJS.displayExitDialog();
				}
			} else {
				if (wlInitOptions.enableLogger) {
					WL.Logger.debug(METHODNAME + "Current tab has no stored history");
				}
				WCHybridAppJS.displayExitDialog();
			}

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}

		},

		/**
		 * Displays a native dialog prompting the user to exit or cancel.
		 * Exit closes the app with a call to WL.App.close
		 */
		displayExitDialog: function() {
			WL.SimpleDialog.show(
				Messages.confirm,
				Messages.exitApp,
				[
					{
						text:Messages.cancel,
						handler:function(){}
					},
					{
						text:Messages.OK,
						handler:function(){WL.App.close();}
					}
				]
			);
		},

		/**
		 * Creates the iOS tab bar
		 */
		createTabBar: function() {
			var METHODNAME = "WCHybridAppJS.createTabBar ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}

			var tabBar = WL.TabBar;
			tabBar.init();

			tabBar.addItem("tab_featured", function() { WCHybridAppJS.loadTab(sessionStorage.getItem('HomePageURL'),0,'tab_featured'); }, "Home", {
				image:"images/ic_menu_home_light.png"
			});
			tabBar.addItem("tab_stores", function() { WCHybridAppJS.loadTab(sessionStorage.getItem('StoreLocatorURL'),1,'tab_stores'); }, "Stores", {
				image:"images/ic_menu_stores_light.png"
			});
			tabBar.addItem("tab_shopcart", function() { WCHybridAppJS.loadTab(sessionStorage.getItem('ShoppingCartURL'),2,'tab_shopcart'); }, "Cart", {
				image:"images/ic_menu_shopcart_light.png"
			});
			tabBar.addItem("tab_more", function() { WCHybridAppJS.loadTab(sessionStorage.getItem('iOSMorePageURL'),3,'tab_more'); }, "More", {
				image:"tabButton:More"
			});
			tabBar.setSelectedItem("tab_featured");
			tabBar.setVisible(true);

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}
		},

		/**
		 * Updates the header UI to display/hide header elements, such as the logo, document.title and the back button
		 */
		updateNavBarState: function() {
			var METHODNAME = "WCHybridAppJS.updateNavBarState ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}

			//find out which history stack to use
			var selectedTabIndex = WCHybridAppJS.getCurrentTabIndex();
			var historyKey = historyStackPrefix + selectedTabIndex;
			var storedHistory = window.sessionStorage.getItem(historyKey);
			
			if (storedHistory !== null && typeof storedHistory !== "undefined") {
				var httpsPage = false;
				var historyStack = JSON.parse(storedHistory);
				if (historyStack.length > 0) {
					if (window.location.protocol == "https:") {
						httpsPage = true;
					}
					// if the page in history is has the same URL, no need to show the back button
					// or if we have switched to HTTPS and the history is currently empty
					if (historyStack.pop().indexOf(window.location.pathname) == -1 || httpsPage && historyStack.length == 0) {
						//show the back button since there is history
						if(window.innerHeight == document.body.clientHeight) {
							document.body.style.paddingBottom="43px";
						}
						if(document.getElementById("header_back_button_container")) {
							var backButtonLabel = (selectedTabIndex == cartIndex ? Messages.cart : Messages.back);
							document.getElementById("header_back_button_container").innerHTML =
							'<div id="header_back_button">' +
								'<a id="back_button" onclick="WCHybridAppJS.onBackKeyDown();">' +
									'<div id="back_button_container" class="back_button_spacer">' +
										'<div class="back_button_container left">' +
											'<div class="back_button_arrow left"></div>' +
											'<div class="back_button_text left">' + backButtonLabel + '</div>' +
										'</div>' +
									'</div>' +
								'</a>' +
								'<div id="header_back_button_heading">' +
								'</div>' +
								'<div id="header_back_button_status_bar"></div>' +
							'</div>';
							document.getElementById("header_back_button_heading").innerHTML = document.getElementsByTagName("title")[0].textContent;
							location.hash = "#header_back_button_status_bar";
						}
					}
				} else {
					//hide the back button since there is no history
				}
			}
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}
		},

		/**
		 * Gets the selected tab from storage and updates the value to
		 * the clicked tab, switching the styling
		 * @param tabName tab name
		 */
		updateSelectedTab: function(tabName) {
			var tabSelected = window.sessionStorage.getItem("tabSelected");
			if (tabSelected !== null && tabSelected.indexOf("tab_") >= 0) {
				WL.TabBar.setSelectedItem(tabName);
				window.sessionStorage.setItem("tabSelected", tabName);
			}
		},

		/**
		 * Updates the current tab state
		 */
		updateTabState: function() {
			var METHODNAME = "WCHybridAppJS.updateTabState ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}
			var selectedTabIndex = WCHybridAppJS.getCurrentTabIndex();
			if (selectedTabIndex == featuredIndex) {
				WCHybridAppJS.setSelectedTab('tab_featured');
			} else if (selectedTabIndex == storesIndex) {
				WCHybridAppJS.setSelectedTab('tab_stores');
			} else if (selectedTabIndex == cartIndex) {
				WCHybridAppJS.setSelectedTab('tab_shopcart');
			} else if (selectedTabIndex == moreIndex) {
				WCHybridAppJS.setSelectedTab('tab_more');
			} else {
				WCHybridAppJS.setSelectedTab(""); // Specify an empty tab ID so no tab is highlighted
				sessionStore.removeItem('tabSelected');
			}
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}
		},

		/**
		 * Sets the selected tab CSS class
		 * @param tabName   tab name
		 */
		setSelectedTab: function(tabName) {
			WL.TabBar.setSelectedItem(tabName);
			sessionStorage.setItem('tabSelected', tabName);
		},

		/**
		 * Returns the tab index by analyzing the current page's URL. This function categorizes the
		 * different views and URLs into tabs groups that aid the Worklight app in navigation. The
		 * conditions in this function should be updated as Struts view names are added/changed or
		 * SEO/non-SEO URLs are added/changed, as appropriate.
		 * @return The int corresponding to the tab index, which represents a group of pages under a tab.
		 *         Returns null if there is no match.
		 */
		getCurrentTabIndex: function() {
			var METHODNAME = "WCHybridAppJS.getCurrentTabIndex ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}

			var selectedTab = "";
			var currUrl = window.location.href;
			var currPath = window.location.pathname;

			//check if the window.location.hash object contains only a single hash character
			//and remove it, otherwise the URL will not be evaluated correctly
			if (WCHybridAppJS.endsWith(currUrl, "#") == true) {
				currUrl = currUrl.substring(0,currUrl.length-1);
			}
			if (currUrl.indexOf(sessionStore.getItem('ShoppingCartURL')) >= 0
				|| currPath.indexOf('m30OrderItemDisplay') >= 0 
				|| currPath.indexOf("CheckoutLogon") >= 0 
				|| currPath.indexOf('OrderItemDisplay') >= 0
				|| ((currPath.indexOf('m30Order') >= 0 && currPath.indexOf('m30OrderHistory') == -1) && window.location.search.indexOf('fromPage=MyAccount') == -1 && window.location.search.indexOf('fromPage=iOSMore') == -1)
				|| currPath.indexOf('ShipmentOrder') >= 0
				|| currPath.indexOf('OrderShippingBilling') >= 0
				|| currPath.indexOf('CheckoutPayInStoreView') >= 0
				|| window.location.search.indexOf('fromPage=ShoppingCart') >= 0
				|| (currPath.indexOf('m30StoreLocatorView') >= 0 && window.location.search.indexOf('fromPage=ShoppingCart') >= 0)
				|| (currPath.indexOf('m30SelectedStoreListView') >= 0 && window.location.search.length == 0)) {
				selectedTab = cartIndex;
			} else if (currUrl.indexOf(sessionStore.getItem('StoreLocatorURL')) >= 0
				|| currPath.indexOf('m30Store') >= 0
				|| currPath.indexOf('m30SelectedStore') >= 0) {
				selectedTab = storesIndex;
			} else if (currUrl == sessionStore.getItem('HomePageURL')
				|| window.location.search.indexOf(previewModeUrlParameters) == 0) {
				selectedTab = featuredIndex;
			} else if (currUrl.indexOf(sessionStore.getItem('iOSMorePageURL')) >= 0
				|| currUrl.indexOf(sessionStore.getItem('PrivacyViewURL')) >= 0
				|| currUrl.indexOf(sessionStore.getItem('ContactUsViewURL')) >= 0
				|| currPath.indexOf("CustomerService") >= 0
				|| currPath.indexOf("/privacy-policy") >= 0
				|| currPath.indexOf("/return-policy") >= 0
				|| currPath.indexOf("/help") >= 0
				|| window.location.search.indexOf('fromPage=iOSMore') >= 0
				|| currUrl.indexOf(sessionStore.getItem('WishListDispURL')) >= 0
				|| currPath.indexOf('m30InterestList') >= 0
				|| currUrl.indexOf(sessionStore.getItem('AccountDispURL')) >= 0
				|| currPath.indexOf('m30MyAccount') >= 0
				|| currPath.indexOf('m30MySubscriptionDisplay') >= 0
				|| currPath.indexOf('m30CouponsDisplay') >= 0
				|| currPath.indexOf('m30OrderHistory') >= 0
				|| currPath.indexOf('m30UserRegistrationUpdate') >= 0
				|| currPath.indexOf('InterestItemDisplay') >= 0
				|| window.location.search.indexOf('fromPage=MyAccount') >= 0) {
				selectedTab = moreIndex;
			} else if (currUrl.indexOf(sessionStore.getItem('LanguageCurrencyDispURL')) >= 0
				|| currUrl.indexOf(sessionStore.getItem('ProductCompareResultView')) >= 0
				|| currPath.indexOf('ProductCompareResultView') >= 0
				|| currPath.indexOf("LogonForm") >= 0
				|| currPath.indexOf("UserRegistration") >= 0
				|| currPath.indexOf("ResetPassword") >= 0
				|| currPath.indexOf("LanguageCurrencyDisplay") >= 0) {
				//any pages that would not record history, such as static pages or
				//single-level sections would not require history to be maintained
				selectedTab = historyDisabled;
			} else {
				var tabSelected = sessionStore.getItem('tabSelected');
				if (currUrl.indexOf(sessionStore.getItem('TopCategoriesDisplayURL')) >= 0
					|| currPath.indexOf('CategoriesDisplayView') >= 0
					|| (tabSelected !== null && tabSelected.indexOf("menu_") == -1
						&& currPath.indexOf('ProductCompareResultView') == -1
						&& currPath.indexOf('m30Order') == -1)) {
					selectedTab = featuredIndex;
				}
			}

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "selectedTab=" + selectedTab);
				WL.Logger.debug(METHODNAME + "EXIT");
			}
			return selectedTab;
		},

		/**
		 * Utility function to check if string ends with specified suffix
		 * @param str The target string to check
		 * @param suffix The suffix to check for
		 */
		endsWith: function(str, suffix) {
			return str.indexOf(suffix, str.length - suffix.length) !== -1;
		}

	};

})();
