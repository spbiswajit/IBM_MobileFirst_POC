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

var SupportedLangIDs = {
	en_US : -1,
	en : -1,
	fr_FR : -2,
	fr : -2,
	de_DE : -3,
	de : -3,
	it_IT : -4,
	it : -4,
	es_ES : -5,
	es : -5,
	pt_BR : -6,
	pt : -6,
	zh_CN : -7,
	zh : -7,
	zh_TW : -8,
	ko_KR : -9,
	ko : -9,
	ja_JP : -10,
	ja : -10,
	iw_IL : -11,
	iw : -11,
	tr_TR : -13,
	tr : -13,
	ru_RU : -20,
	ru : -20,
	ro_RO : -21,
	ro : -21,
	pl_PL : -22,
	pl : -22,
	ar_EG : -23,
	ar : -23
};

var SupportedLanguageTokens = {
	en_US : "en",
	fr_FR : "fr",
	de_DE : "de",
	it_IT : "it",
	es_ES : "es",
	pt_BR : "pt",
	zh_CN : "zh-CN",
	zh_TW : "zh-TW",
	ko_KR : "ko",
	ja_JP : "ja",
	he_IL : "he",
	iw_IL : "iw",
	tr_TR : "tr",
	ru_RU : "ru",
	ro_RO : "ro",
	pl_PL : "pl",
	ar_EG : "ar"
};

var SupportedLocales = {
	deviceDefault : "deviceDefault",
	en_US : "en_US",
	fr_FR : "fr_FR",
	de_DE : "de_DE",
	it_IT : "it_IT",
	es_ES : "es_ES",
	pt_BR : "pt_BR",
	zh_CN : "zh_CN",
	zh_TW : "zh_TW",
	ko_KR : "ko_KR",
	ja_JP : "ja_JP",
	he_IL : "he_IL",
	iw_IL : "iw_IL",
	tr_TR : "tr_TR",
	ru_RU : "ru_RU",
	ro_RO : "ro_RO",
	pl_PL : "pl_PL",
	ar_EG : "ar_EG"
};

var DefaultSupportedLanguages = {
	en_US : null,
	fr_FR : null,
	de_DE : null,
	it_IT : null,
	es_ES : null,
	pt_BR : null,
	zh_CN : null,
	zh_TW : null,
	ko_KR : null,
	ja_JP : null,
	iw_IL : null,
	tr_TR : null,
	ru_RU : null,
	ro_RO : null,
	pl_PL : null,
	ar_EG : null
};

var SupportedLanguages = {
	deviceDefault : null,
	en_US : null,
	fr_FR : null,
	de_DE : null,
	it_IT : null,
	es_ES : null,
	pt_BR : null,
	zh_CN : null,
	zh_TW : null,
	ko_KR : null,
	ja_JP : null,
	iw_IL : null,
	tr_TR : null,
	ru_RU : null,
	ro_RO : null,
	pl_PL : null,
	ar_EG : null
};

var Messages = {
	// Add here your messages for the default language.
	// Generate a similar file with a language suffix containing the translated messages
	// key1 : message1,
	// key2 : message2

	// Uncomment if you use the Authenticator example.
	// usernameLabel : "Username:",
	// passwordLabel : "Password:",
	// invalidUsernamePassword : 'Invalid username or password.'
	// applicationDenied : "Disabled Application",
	// exitApplication : "Exit",
	// getNewVersion : "Update application"

	hostName : null,
	storeId : null,
	storeName : null,
	catalogId : null,
	previewToken : null,
	langId : null,

	appDisplayName : null,
	appDescription : null,
	appVersionTitle : null,
	loading : null,
	appDisabled : null,
	appDisabledTitle: null,
	getNewVersion: null,
	exitApp: null,
	requiredFieldsMsg1: null,
	requiredFieldsMsg2: null,

	signIn : null,
	signOut : null,
	myAccount : null,
	scan : null,
	shoppingList : null,
	privacyPolicy : null,
	productCompare : null,
	contactUs : null,
	settings : null,
	languageCurrency : null,
	featured : null,
	departments : null,
	storeLocator : null,
	stores : null,
	cart : null,
	more : null,
	devSettings : null,
	slideUp : null,

	OK : null,
	save : null,
	reset : null,
	confirm: null,
	cancel: null,
	exit: null,
	optional : null,

	//Error messages
	ERR_EC: null,
	ERR_EC_GENERIC: null,
	ERR_EC_FORM_INCOMPLETE: null,
	ERR_EC_STORE_CONNECTION: null,
	ERR_EC_SERVER_NOT_FOUND: null,
	ERR_EC_EXIT_QUESTION: null,
	ERR_EC_NO_INTERNET_ACCESS: null,
	ERR_EC_CHECK_INTERNET_CONNECTION: null,
	ERR_EC_UNEXPECTED_EXCEPTION: null,
	ERR_EC_HOSTNAME_MISSING: null,
	ERR_EC_STOREID: null,
	ERR_EC_CATALOGID: null,
	ERR_EC_BARCODE_SCAN: null,
	ERR_EC_BARCODE_SCAN_LAUNCH: null,
	ERR_EC_CONTACTS_LAUNCH: null,
	ERR_EC_MAPS_LAUNCH: null,

};

var LocalizedClientMessages = {
	close: null,
	directUpdateNotificationTitle: null,
	directUpdateNotificationMessage: null,
	directUpdateErrorTitle: null,
	directUpdateErrorMessageNotEnoughStorage : null,
	directUpdateErrorMessageFailedDownloadingZipFile : null,
	directUpdateErrorMessageFailedProcessingZipFile : null,
	loading : null,
	reload : null,
	tryAgain : null,
	update : null,
	wlSettings : null,
};

var MessagesJS = (function() {

	var langLocale = null;

	return {

		getLangLocale: function() {
			return langLocale;
		},
		
		/**
		 * Sets the language preference.
		 * @param alangId The language ID
		 */
		setLanguage: function(alangId) {
			var METHODNAME = "MessagesJS.setLanguage ";
			if (wlInitOptions.enableLogger) {
				WL.Logger.debug(METHODNAME, "lang ID used: " + alangId);
			}

			switch (alangId) {
				case SupportedLangIDs.en_US:
					langLocale = SupportedLocales.en_US;
					setEn_US();
					break;
				case SupportedLangIDs.fr_FR:
					langLocale = SupportedLocales.fr_FR;
					setFr_FR();
					break;
				case SupportedLangIDs.de_DE:
					langLocale = SupportedLocales.de_DE;
					setDe_DE();
					break;
				case SupportedLangIDs.it_IT:
					langLocale = SupportedLocales.it_IT;
					setIt_IT();
					break;
				case SupportedLangIDs.es_ES:
					langLocale = SupportedLocales.es_ES;
					setEs_ES();
					break;
				case SupportedLangIDs.pt_BR:
					langLocale = SupportedLocales.pt_BR;
					setPt_BR();
					break;
				case SupportedLangIDs.zh_CN:
					langLocale = SupportedLocales.zh_CN;
					setZh_CN();
					break;
				case SupportedLangIDs.zh_TW:
					langLocale = SupportedLocales.zh_TW;
					setZh_TW();
					break;
				case SupportedLangIDs.ko_KR:
					langLocale = SupportedLocales.ko_KR;
					setKo_KR();
					break;
				case SupportedLangIDs.ja_JP:
					langLocale = SupportedLocales.ja_JP;
					setJa_JP();
					break;
				case SupportedLangIDs.iw_IL:
					langLocale = SupportedLocales.iw_IL;
					setIw_IL();
					break;
				case SupportedLangIDs.tr_TR:
					langLocale = SupportedLocales.tr_TR;
					setTr_TR();
					break;
				case SupportedLangIDs.ru_RU:
					langLocale = SupportedLocales.ru_RU;
					setRu_RU();
					break;
				case SupportedLangIDs.ro_RO:
					langLocale = SupportedLocales.ro_RO;
					setRo_RO();
					break;
				case SupportedLangIDs.pl_PL:
					langLocale = SupportedLocales.pl_PL;
					setPl_PL();
					break;
				case SupportedLangIDs.ar_EG:
					langLocale = SupportedLocales.ar_EG;
					setAr_EG();
					break;
				default:
					if (wlInitOptions.enableLogger) {
						WL.Logger.debug(METHODNAME, "Use default supported language id: " + SupportedLangIDs.en_US + " language locale: " + SupportedLocales.en_US);
					}
					langLocale = SupportedLocales.en_US;
					setEn_US();
					break;
			}

		}

	};

})();
