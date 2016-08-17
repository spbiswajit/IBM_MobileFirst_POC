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

/**
 * Action in event that connect to the Worklight Server has failed during the application launch
 */
function connectionFailure() {
	if (wlInitOptions.enableLogger) {
		WL.Logger.debug("initOptions.connectionFailure", "Connection to the Worklight Server failed. Continue environment initialization.");
	}
	wlEnvInit();
}

//Worklight Client initialization parameter array
 var wlInitOptions = {

	// # Should application automatically attempt to connect to Worklight Server on application start up
	// # The default value is true, we are overriding it to false here.
	connectOnStartup : true,

	//The callback function to invoke in case application fails to connect to Worklight Server
	onConnectionFailure : connectionFailure,

	// # Worklight server connection timeout
	//timeout: 30000,

	// # How often heartbeat request will be sent to Worklight Server
	//heartBeatIntervalInSecs: 20 * 60,

	//Should direct updates prompt the user or occur silently
	updateSilently: false,

	// # Application Logger, see documentation under WL.Logger for more details.
	// - enabled - Determines if log messages are shown (true) or not (false)
	// - level - Logging level, most to least verbose: 'debug', 'log', 'info', 'warn', 'error'
	// - stringify - Turn arguments into strings before printing to the console (true) or not (false)
	// - pretty - Turns JSON Objects into well spaced and formated strings.
	// - tag.level - Append a level tag (e.g. [DEBUG] Message) to the message.
	// - tag.package - Append the package tag  (e.g. [my.pkg] Message) to the message if there is one
	// - whitelist - Array of package names to show (e.g ['my.pkg'])
	// - blacklist - Array of package names to ignore (e.g ['my.pkg'])
	logger: {
		enabled: true,
		level: 'debug',
		stringify: true,
		pretty: false,
		tag: {level: false, pkg: true},
		whitelist: [],
		blacklist: []
	},

	//Should application output logs
	enableLogger: true,
	
	//#Application Analytics
	// - enabled - Determines if analytics messages are sent to the server
	// - url - server that receives the analytics data (default: [worklight-server]/analytics)
	analytics : {
		enabled: false
		//url : ''
	}

	// # The options of busy indicator used during application start up
	//busyOptions: {text: "Loading..."}
};

/**
 * Add the Worklight Client initialization call to the page load event
 */
if (window.addEventListener) {
	window.addEventListener('load', function() { WL.Client.init(wlInitOptions); }, false);
} else if (window.attachEvent) {
	window.attachEvent('onload',  function() { WL.Client.init(wlInitOptions); });
}

/**
 * Bind events to the Cordova deviceready event
 */
if (document.addEventListener) {
	document.addEventListener("deviceready", WCHybridJS.onDeviceReady, false);
}

var setLocaleForClientMessages = function() {
	var deviceLocale = WL.App.getDeviceLocale();
	deviceLocale = deviceLocale.replace("-","_");
	console.log("Device locale for client message localization: " + deviceLocale);

	switch (deviceLocale) {
		case SupportedLocales.en_US:
			setSystemLocaleEn_US();
			break;
		case SupportedLocales.fr_FR:
			setSystemLocaleFr_FR();
			break;
		case SupportedLocales.de_DE:
			setSystemLocaleDe_DE();
			break;
		case SupportedLocales.it_IT:
			setSystemLocaleIt_IT();
			break;
		case SupportedLocales.es_ES:
			setSystemLocaleEs_ES();
			break;
		case SupportedLocales.pt_BR:
			setSystemLocalePt_BR();
			break;
		case SupportedLocales.zh_CN:
			setSystemLocaleZh_CN();
			break;
		case SupportedLocales.zh_TW:
			setSystemLocaleZh_TW();
			break;
		case SupportedLocales.ko_KR:
			setSystemLocaleKo_KR();
			break;
		case SupportedLocales.ja_JP:
			setSystemLocaleJa_JP();
			break;
		case SupportedLocales.he_IL:
			setSystemLocaleIw_IL();
			break;
		case SupportedLocales.iw_IL:
			setSystemLocaleIw_IL();
			break;
		case SupportedLocales.tr_TR:
			setSystemLocaleTr_TR();
			break;
		case SupportedLocales.ru_RU:
			setSystemLocaleRu_RU();
			break;
		case SupportedLocales.ro_RO:
			setSystemLocaleRo_RO();
			break;
		case SupportedLocales.pl_PL:
			setSystemLocalePl_PL();
			break;
		case SupportedLocales.ar_EG:
			setSystemLocaleAr_EG();
			break;
		default:
			setSystemLocaleEn_US();
			break;
	}
	
	// assign the localized strings to system messages
	WL.ClientMessages.close = LocalizedClientMessages.close;
	WL.ClientMessages.directUpdateNotificationTitle = LocalizedClientMessages.directUpdateNotificationTitle;
	WL.ClientMessages.directUpdateNotificationMessage = LocalizedClientMessages.directUpdateNotificationMessage;
	WL.ClientMessages.directUpdateErrorTitle = LocalizedClientMessages.directUpdateErrorTitle;
	WL.ClientMessages.directUpdateErrorMessageNotEnoughStorage = LocalizedClientMessages.directUpdateErrorMessageNotEnoughStorage;
	WL.ClientMessages.directUpdateErrorMessageFailedDownloadingZipFile = LocalizedClientMessages.directUpdateErrorMessageFailedDownloadingZipFile;
	WL.ClientMessages.directUpdateErrorMessageFailedProcessingZipFile = LocalizedClientMessages.directUpdateErrorMessageFailedProcessingZipFile;
	WL.ClientMessages.loading = LocalizedClientMessages.loading;
	WL.ClientMessages.reload = LocalizedClientMessages.reload;
	WL.ClientMessages.tryAgain = LocalizedClientMessages.tryAgain;
	WL.ClientMessages.update = LocalizedClientMessages.update;
	WL.ClientMessages.wlSettings = LocalizedClientMessages.wlSettings;
	
};
setLocaleForClientMessages();
