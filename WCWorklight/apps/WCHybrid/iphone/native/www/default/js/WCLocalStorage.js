
/* JavaScript content from js/WCLocalStorage.js in folder common */
/*
 *-----------------------------------------------------------------
 * Licensed Materials - Property of IBM
 *
 * WebSphere Commerce
 *
 * (C) Copyright IBM Corp. 2013 All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp.
 *-----------------------------------------------------------------
 */

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
//*---------------------------------------------------------------------//*

/*
 * WCLocalStorageJS contains the functions to initialize the app and store app configuration
 * into the device's HTML5 LocalStorage for future use.
 */

var WCLocalStorageJS = (function() {

	var deviceTypePrefix = ""; //Set the device prefix of phone devices for the URLs (e.g. m20)

	//DevSettings.html form element IDs
	var wcHostName = "WC_HostName";
	var wcStoreId = "WC_StoreId";
	var wcStoreName = "WC_StoreName";
	var wcCatalogId = "WC_CatalogId";
	var wcLangId = "WC_LangId";
	var wcPreviewToken = "WC_PreviewToken";
	var devSettingsFormName = "dev_settings_form";

	var hostName = null;
	var storeId = null;
	var storeName = null;
	var langId = null;
	var langLocale = null;
	var catalogId = null;
	var previewToken = null;

	var protocol = "http://";
	var protocolSecure = "https://";
	var webURI = null;
	var storeURI = null;
	var remoteServerURL = null;

	var lStorage = window.localStorage;

	//default development settings
	var defaultStoreId = "10152";
	var defaultStoreName = "auroraesite";
	var defaultCatalogId = "10001";
	var defaultLangId = "-1";
	var isDevMode = true; //NOTE: Set isDevMode == false before going to production

	return {

		/**
		 * Assign the device's locale and language as the default unless a specific language is
		 * selected by the user in the Development Settings page
		 */
		setDeviceLocaleLanguage: function() {
			var METHODNAME = "WCLocalStorageJS.setDeviceLocaleLanguage ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}

			var deviceLocale = WL.App.getDeviceLocale();
			var deviceLanguage = WL.App.getDeviceLanguage();

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "deviceLocale: " + deviceLocale + " deviceLanguage: " + deviceLanguage);
				WL.Logger.debug(METHODNAME + "SupportedLangIDs.hasOwnProperty(deviceLocale)" + SupportedLangIDs.hasOwnProperty(deviceLocale));
			}

			if (SupportedLangIDs.hasOwnProperty(deviceLocale)) {
				if (wlInitOptions.enableLogger) {
					WL.Logger.debug(METHODNAME + "Device locale can be used: " + deviceLocale);
				}
				defaultLangId = SupportedLangIDs[deviceLocale];
			} else if (SupportedLangIDs.hasOwnProperty(deviceLanguage)) {
				if (wlInitOptions.enableLogger) {
					WL.Logger.debug(METHODNAME + "Device language can be used: " + deviceLanguage);
				}
				defaultLangId = SupportedLangIDs[deviceLanguage];
			} else {
				defaultLangId = -1;
				if (wlInitOptions.enableLogger) {
					WL.Logger.debug(METHODNAME + "Device language cannot be used. Use default language ID: - " + defaultLangId);
				}
			}
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "Device default langId: " + defaultLangId + " type: " + (typeof defaultLangId));
			}
			MessagesJS.setLanguage(defaultLangId);
			WCLocalStorageJS.setSettingsFormDirAttribute(defaultLangId);
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}
		},

		/**
		 * Loads the settings from the local storage
		 */
		loadDevSettings: function() {
			var METHODNAME = "WCLocalStorageJS.loadDevSettings ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}

			//set the device locale and language
			WCLocalStorageJS.setDeviceLocaleLanguage();

			hostName = lStorage.getItem(wcHostName);
			storeId = lStorage.getItem(wcStoreId);
			storeName = lStorage.getItem(wcStoreName);
			catalogId = lStorage.getItem(wcCatalogId);
			previewToken = lStorage.getItem(wcPreviewToken);
			langId = lStorage.getItem(wcLangId);

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "localStorage[" + wcHostName + "]: " + hostName);
				WL.Logger.debug(METHODNAME + "localStorage[" + wcStoreId + "]: " + storeId);
				WL.Logger.debug(METHODNAME + "localStorage[" + wcStoreName + "]: " + storeName);
				WL.Logger.debug(METHODNAME + "localStorage[" + wcCatalogId + "]: " + catalogId);
				WL.Logger.debug(METHODNAME + "localStorage[" + wcPreviewToken + "]: " + previewToken);
				WL.Logger.debug(METHODNAME + "localStorage[" + wcLangId + "]: " + langId + ", type: " + (typeof langId));
			}

			//initialize the settings page
			WCLocalStorageJS.initializeSettings();

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}
		},

		/**
		 * Saves the settings into the local storage.
		 */
		saveDevSettings: function() {
			var METHODNAME = "WCLocalStorageJS.saveDevSettings ";

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}

			if (WCLocalStorageJS.validateDevSettingsForm() == true) {

				//hide the dev settings page
				WCHybridCommonJS.showSplash();

				var devSettingsForm = document.forms[devSettingsFormName];

				hostName = devSettingsForm[wcHostName].value;
				if (hostName != null && hostName.length > 0 && hostName != 'undefined') {
					lStorage.setItem(wcHostName, hostName);
				}
				storeId = devSettingsForm[wcStoreId].value;
				if (storeId != null && storeId.length > 0 && storeId != 'undefined') {
					lStorage.setItem(wcStoreId, storeId);
				}
				storeName = devSettingsForm[wcStoreName].value;
				if (storeName != null && storeName.length > 0 && storeName != 'undefined') {
					lStorage.setItem(wcStoreName, storeName);
				}
				catalogId = devSettingsForm[wcCatalogId].value;
				if (catalogId != null && catalogId.length > 0 && catalogId != 'undefined') {
					lStorage.setItem(wcCatalogId, catalogId);
				}
				previewToken = devSettingsForm[wcPreviewToken].value;
				if (previewToken != null && previewToken.length > 0 && previewToken != 'undefined') {
					lStorage.setItem(wcPreviewToken, previewToken);
				} else {
					lStorage.removeItem(wcPreviewToken);
				}

				var locale = devSettingsForm[wcLangId].value;

				if (wlInitOptions.enableLogger) {
					WL.Logger.debug(METHODNAME + "document.forms[" + devSettingsFormName + "][" + wcHostName + "]: " + hostName);
					WL.Logger.debug(METHODNAME + "document.forms[" + devSettingsFormName + "][" + wcStoreId + "]: " + storeId);
					WL.Logger.debug(METHODNAME + "document.forms[" + devSettingsFormName + "][" + wcStoreName + "]: " + storeName);
					WL.Logger.debug(METHODNAME + "document.forms[" + devSettingsFormName + "][" + wcCatalogId + "]: " + catalogId);
					WL.Logger.debug(METHODNAME + "document.forms[" + devSettingsFormName + "][" + wcPreviewToken + "]: " + previewToken);
					WL.Logger.debug(METHODNAME + "document.forms[" + devSettingsFormName + "][" + wcLangId + "]: " + locale);
				}

				if (locale != null && locale != SupportedLocales.deviceDefault && SupportedLocales.hasOwnProperty(locale)) {
					langId = lStorage.setItem(wcLangId, SupportedLangIDs[locale]);
				} else {
					lStorage.removeItem(wcLangId);
				}

				//Reload the saved information from the local storage.
				WCLocalStorageJS.loadDevSettings();

			} else {
				WL.SimpleDialog.show(Messages.ERR_EC, Messages.ERR_EC_FORM_INCOMPLETE, [{text:Messages.OK}]);
				if (wlInitOptions.enableLogger) {
					WL.Logger.debug(METHODNAME + Messages.ERR_EC + ": " + Messages.ERR_EC_FORM_INCOMPLETE);
				}
			}

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}

		},

		/**
		 * Resets the dev settings form to default values. Does another check of the device locale and language
		 * and reinitializes the settings
		 */
		resetDevSettings: function() {
			var METHODNAME = "WCLocalStorageJS.resetDevSettings ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "Clearing the local storage");
			}
			lStorage.clear();
			WCLocalStorageJS.loadDevSettings();
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}
		},

		/**
		 * Initializes the values of the settings after loading the setting form.
		 * Injects the options for languages menu.
		 */
		devSettingsLoaded: function() {
			var METHODNAME = "WCLocalStorageJS.devSettingsLoaded ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}
			//update the page elements
			document.getElementById("dev_settings_msg").innerHTML = Messages.requiredFieldsMsg1 + "<span class='required'>*</span>" + Messages.requiredFieldsMsg2;
			document.getElementById("hostName").innerHTML = Messages.hostName;
			document.getElementById("storeId").innerHTML = Messages.storeId;
			document.getElementById("storeName").innerHTML = Messages.storeName;
			document.getElementById("catalogId").innerHTML = Messages.catalogId;
			document.getElementById("langId").innerHTML = Messages.langId;
			document.getElementById("previewToken").innerHTML = Messages.previewToken;
			document.getElementById("save_button").value = Messages.save;
			document.getElementById("reset_button").value = Messages.reset;
			document.getElementById("app_version_title").innerHTML = Messages.appVersionTitle;
			document.getElementById("app_version_value").innerHTML = versionTimestamp;

			document.getElementById(wcHostName).value = hostName;
			document.getElementById(wcStoreId).value = storeId;
			document.getElementById(wcStoreName).value = storeName;
			document.getElementById(wcCatalogId).value = catalogId;
			if (previewToken != null && previewToken != 'undefined') {
				document.getElementById(wcPreviewToken).value = previewToken;
			}

			langLocale = MessagesJS.getLangLocale();
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "langLocale: " + langLocale);
				WL.Logger.debug(METHODNAME + "SupportedLocales.hasOwnProperty(langLocale): " + SupportedLocales.hasOwnProperty(langLocale));
			}

			var prefLangId = lStorage.getItem(wcLangId);
			if ((langLocale != null || langLocale != "undefined") && SupportedLocales.hasOwnProperty(langLocale)) {
				var langInput = document.getElementById(wcLangId);
				langInput.options.length = 0;

				var optionsFragment = document.createDocumentFragment();
				var bSelected = false;
				for (var tempLocale in SupportedLocales) {
					if (wlInitOptions.enableLogger) {
						WL.Logger.debug(METHODNAME + "tempLocale: " + tempLocale);
					}
					var option = document.createElement("option");
					if (prefLangId == SupportedLangIDs[tempLocale]) {
						option.selected = true;
						bSelected = true;
					}
					option.value = tempLocale;
					option.nodeType = "text";
					if (tempLocale != SupportedLocales.deviceDefault) {
						if (DefaultSupportedLanguages[tempLocale] != undefined) {
						option.text = DefaultSupportedLanguages[tempLocale];
						}
					} else {
						if (SupportedLanguages[tempLocale] != undefined) {
						option.text = SupportedLanguages[tempLocale];
						}
					}

					if (option.text.length > 0) {
					optionsFragment.appendChild(option);
					}

				};

				langInput.appendChild(optionsFragment);
				//default device language is selected
				if (bSelected == false) {
					options[0].selected = true;
				}
			};

			document.getElementById("slide_text").className = "";
			document.getElementById("slide_text").innerHTML = Messages.slideUp;

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}
		},

		/**
		 * Set the value of the direction attribute on the html tag of the settings page
		 * @param langId the language ID
		 */
		setSettingsFormDirAttribute: function(langId) {
			var METHODNAME = "WCLocalStorageJS.setSettingsFormDirAttribute ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}
			
			// set the direction on the html tag of the development settings page
			if (langId == SupportedLangIDs.iw_IL || langId == SupportedLangIDs.ar_EG) {
				document.getElementById("WCHybridHtmlContent").dir="rtl";
			} else {
				document.getElementById("WCHybridHtmlContent").dir="ltr";
			}

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}
		},

		/**
		 * Initializes the settings. It will either redirect to load the remote page or show the setting page.
		 */
		initializeSettings: function() {
			var METHODNAME = "WCLocalStorageJS.initializeSettings ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "ENTRY");
			}

			//default settings
			if (storeId == null || storeId == '') {
				storeId = defaultStoreId;
			}
			if (storeName == null || storeName == '') {
				storeName = defaultStoreName;
			}
			if (catalogId == null || catalogId == '') {
				catalogId = defaultCatalogId;
			}
			if (langId != null && langId != "undefined" && langId != defaultLangId) {
				langId = parseInt(langId, 10);
				if (wlInitOptions.enableLogger) {
					WL.Logger.debug(METHODNAME + "Updated typeof langId: " + (typeof langId));
				}
				MessagesJS.setLanguage(langId);
				WCLocalStorageJS.setSettingsFormDirAttribute(langId);
			} else {
				langId = defaultLangId;
			}

			//asynchronous call to retrieve network connection info
			WL.Device.getNetworkInfo (function (networkInfo) {
				var isConnected = networkInfo.isNetworkConnected; //isNetworkConnected returns whether the device has an IP address
				if (wlInitOptions.enableLogger) {
					WL.Logger.debug(METHODNAME + "isConnected(" + typeof isConnected + "): " + isConnected);
				}

				//if hostname is not empty, then check if connection exists, otherwise prompt user to check connection
				if (isConnected != null && isConnected == "true" && hostName != null && hostName != "") {
					if (previewToken == null || previewToken.length == 0 || previewToken == 'undefined') {
						webURI = protocol + hostName + "/webapp/wcs/stores/servlet";
						storeURI = SupportedLanguageTokens[MessagesJS.getLangLocale()] + "/" + storeName;
					} else {
						webURI = protocolSecure + hostName + ":8006/webapp/wcs/preview/servlet";
						storeURI = SupportedLanguageTokens[MessagesJS.getLangLocale()] + "/" + storeName + "?newPreviewSession=true&previewToken=" + previewToken;
					}
					if (deviceTypePrefix != null && deviceTypePrefix != "") {
						remoteServerURL = webURI + "/" + deviceTypePrefix + "/" + storeURI;
					} else {
						remoteServerURL = webURI + "/" + storeURI;
					}

					//Clear preview token from localStorage since we do not want to keep it for the next startup
					lStorage.removeItem(wcPreviewToken);
					if (wlInitOptions.enableLogger) {
						WL.Logger.debug(METHODNAME + "Cleared the preview token from HTML5 localStorage");
					}

					//load the remote server url
					WCHybridCommonJS.openPage(remoteServerURL);
				} else {
					if (isConnected != null && isConnected == false) {
						//networkInfo.isNetworkConnected returned false, no IP address was found
						if (wlInitOptions.enableLogger) {
							WL.Logger.debug(METHODNAME + "No IP address found. Check the device's internet connection.");
						}
					}

					//NOTE: Set isDevMode == false before going to production
					//only display the dev settings page if in dev mode
					if (isDevMode == true) {
						if (wlInitOptions.enableLogger) {
							WL.Logger.debug(METHODNAME + "isDevMode? " + isDevMode);
						}
						//once dev settings page loads, update its child content
						if (document.getElementById("dev_settings_page").className == "hidden") {
							document.getElementById("dev_settings_page").className = "wrapper bg_white";
							WCLocalStorageJS.devSettingsLoaded();
						} else {
							if (wlInitOptions.enableLogger) {
								WL.Logger.debug(METHODNAME + "DevSettings page is displayed, only setting values to default.");
							}
							//if dev settings page already loaded, set the form to default values
							WCLocalStorageJS.devSettingsLoaded();
						}
					}

					//if hostname is set, then display connection error, otherwise hostname is not set
					//so connection is not a requirement yet and no connection error need be displayed
					//if in dev mode, the dev settings page is displayed already when prompted
					if (hostName != null && hostName != "") {
						var errorDialogParams = null;
						if (isDevMode == true) {
							//if in dev mode, clicking OK will dismiss dialog and return to dev settings page
							errorDialogParams = [{text:Messages.OK}];
						} else {
							errorDialogParams = [{text:Messages.OK, handler: function() { WL.App.close();}}];
						}
						WL.SimpleDialog.show(Messages.ERR_EC,
							Messages.ERR_EC_NO_INTERNET_ACCESS + " " + Messages.ERR_EC_CHECK_INTERNET_CONNECTION,
							errorDialogParams
						);
					} else {
						//hostname is not set or missing
						if (wlInitOptions.enableLogger) {
							WL.Logger.debug(METHODNAME + "Hostname is not set. Set or check the value.");
						}
						//if in dev mode, this is the initial/empty form scenario. if not in dev mode,
						//somehow hostname was cleared or removed, display an error
						if (isDevMode == false) {
							WL.SimpleDialog.show(Messages.ERR_EC,
								Messages.ERR_EC_HOSTNAME_MISSING,
								[{text:Messages.OK, handler: function() { WL.App.close();}}]
							);
						}
					}
				}
			});

			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME + "EXIT");
			}

		},

		/**
		 * Checks that no form fields are empty
		 * @returns isValid     is form valid
		 */
		validateDevSettingsForm: function() {
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug("WCLocalStorageJS.validateDevSettingsForm ENTRY");
			}
			var isValid = false;
			if (document.getElementById(wcHostName).value !== ""
				&& document.getElementById(wcStoreId).value !== ""
				&& document.getElementById(wcStoreName).value !== ""
				&& document.getElementById(wcCatalogId).value !== ""
				&& document.getElementById(wcLangId).value !== "") {
				isValid = true;
			}
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug("WCLocalStorageJS.validateDevSettingsForm EXIT");
			}
			return isValid;
		}

	};

})();