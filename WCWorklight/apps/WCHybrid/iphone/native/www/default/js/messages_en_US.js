
/* JavaScript content from js/messages_en_US.js in folder common */
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

// NLS_CHARSET=UTF-8

function setEn_US() {

	Messages.hostName = "Host Name";
	Messages.storeId = "Store ID";
	Messages.storeName = "Store Name";
	Messages.catalogId = "Catalog ID";
	Messages.previewToken = "Preview Token";
	Messages.langId = "Language";

	Messages.appDisplayName = "WC Hybrid";
	Messages.appDescription = "WC Hybrid Store";
	Messages.appVersionTitle = "Application Version:";
	Messages.loading = "Loading ...";
	Messages.appDisabled = "This version of the application has been disabled. The application will now exit.";
	Messages.appDisabledTitle = "Application Disabled";
	Messages.getNewVersion = "Get new version";
	Messages.exitApp = "Do you want to exit the application?";
	Messages.requiredFieldsMsg1 = "All fields marked with an (";
	Messages.requiredFieldsMsg2 = ") are required.";

	Messages.signIn = "Sign In";
	Messages.signOut = "Sign Out";
	Messages.myAccount = "My Account";
	Messages.scan = "Scan";
	Messages.shoppingList = "Wish List";
	Messages.privacyPolicy = "Privacy Policy";
	Messages.productCompare = "Product Compare";
	Messages.contactUs = "Contact Us";
	Messages.settings = "Settings";
	Messages.languageCurrency = "Language / Currency";
	Messages.featured = "Featured";
	Messages.departments = "Departments";
	Messages.storeLocator = "Store Locator";
	Messages.stores = "Stores";
	Messages.cart = "Cart";
	Messages.more = "More";
	Messages.devSettings = "Development Settings";
	Messages.slideUp = "slide up to access settings";

	Messages.OK = "OK";
	Messages.save = "Save";
	Messages.reset = "Reset";
	Messages.confirm = "Confirm";
	Messages.cancel = "Cancel";
	Messages.exit = "Exit";
	Messages.optional = "Optional";

	//Error messages
	Messages.ERR_EC = "Error";
	Messages.ERR_EC_GENERIC = "The application will be stopped. An unexpected exception occurred: ";
	Messages.ERR_EC_FORM_INCOMPLETE = "Check that all fields are complete.";
	Messages.ERR_EC_STORE_CONNECTION = "There was an error connecting to the store. Try again later.";
	Messages.ERR_EC_SERVER_NOT_FOUND = "The remote server was not found.";
	Messages.ERR_EC_EXIT_QUESTION = "Check that your Internet connection is available. Do you want to exit the application?";
	Messages.ERR_EC_NO_INTERNET_ACCESS = "No Internet access is available.";
	Messages.ERR_EC_CHECK_INTERNET_CONNECTION = "Check your device\'s internet connection.";
	Messages.ERR_EC_UNEXPECTED_EXCEPTION = "The application will be stopped. An unexpected exception occurred: ";
	Messages.ERR_EC_HOSTNAME_MISSING = "The \'Host Name\' is incorrect or the value is missing.";
	Messages.ERR_EC_STOREID = "The \'Store ID\' is incorrect or the value is missing.";
	Messages.ERR_EC_CATALOGID = "The \'Catalog ID\' is incorrect or the value is missing.";
	Messages.ERR_EC_BARCODE_SCAN = "An error has occurred during the barcode scan. Try scanning again.";
	Messages.ERR_EC_BARCODE_SCAN_LAUNCH = "An error has occurred while launching the barcode scanner.";
	Messages.ERR_EC_CONTACTS_LAUNCH = "An error has occurred while accessing your contacts.";
	Messages.ERR_EC_MAPS_LAUNCH = "An error has occurred while launching the maps.";

	SupportedLanguages.deviceDefault = "Device default";
	SupportedLanguages.en_US = "United States English";
	SupportedLanguages.fr_FR = "French";
	SupportedLanguages.de_DE = "German";
	SupportedLanguages.it_IT = "Italian";
	SupportedLanguages.es_ES = "Spanish";
	SupportedLanguages.pt_BR = "Brazilian Portuguese";
	SupportedLanguages.zh_CN = "Chinese Simplified";
	SupportedLanguages.zh_TW = "Chinese Traditional";
	SupportedLanguages.ko_KR = "Korean";
	SupportedLanguages.ja_JP = "Japanese";
	SupportedLanguages.iw_IL = "Hebrew";
	SupportedLanguages.tr_TR = "Turkish";
	SupportedLanguages.ru_RU = "Russian";
	SupportedLanguages.ro_RO = "Romanian";
	SupportedLanguages.pl_PL = "Polish";
	SupportedLanguages.ar_EG = "Arabic";

	DefaultSupportedLanguages.en_US = "United States English";
	DefaultSupportedLanguages.fr_FR = "Français";
	DefaultSupportedLanguages.de_DE = "Deutsch";
	DefaultSupportedLanguages.it_IT = "Italiano";
	DefaultSupportedLanguages.es_ES = "Español";
	DefaultSupportedLanguages.pt_BR = "Português do Brasil";
	DefaultSupportedLanguages.zh_CN = "简体中文";
	DefaultSupportedLanguages.zh_TW = "繁體中文";
	DefaultSupportedLanguages.ko_KR = "한국어";
	DefaultSupportedLanguages.ja_JP = "日本語";
	DefaultSupportedLanguages.iw_IL = "עברית";
	DefaultSupportedLanguages.tr_TR = "Türkçe";
	DefaultSupportedLanguages.ru_RU = "русский";
	DefaultSupportedLanguages.ro_RO = "Română";
	DefaultSupportedLanguages.pl_PL = "polski";
	DefaultSupportedLanguages.ar_EG = "عربية";
};

function setSystemLocaleEn_US() {
	LocalizedClientMessages.close = "Close";
	LocalizedClientMessages.directUpdateNotificationTitle = "Update Is Available";
	LocalizedClientMessages.directUpdateNotificationMessage = "An update for the application is available (file size {0} MB).";
	LocalizedClientMessages.directUpdateErrorTitle = "Update Failed",
	LocalizedClientMessages.directUpdateErrorMessageNotEnoughStorage = "An update for the application is available, but there is not enough space available on the device (required size: {0} MB, available space: {1} MB).";
	LocalizedClientMessages.directUpdateErrorMessageFailedDownloadingZipFile = "Failed downloading application update file.";
	LocalizedClientMessages.directUpdateErrorMessageFailedProcessingZipFile = "Failed processing application update file.";
	LocalizedClientMessages.loading = "Loading";
	LocalizedClientMessages.reload = "Reload";
	LocalizedClientMessages.tryAgain = "Try Again";
	LocalizedClientMessages.update = "Update";
	LocalizedClientMessages.wlSettings = "Worklight Settings";
};