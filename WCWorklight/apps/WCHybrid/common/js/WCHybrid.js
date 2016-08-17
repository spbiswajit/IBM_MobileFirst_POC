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
 * Common Worklight initialization call
 */
function wlCommonInit(){
    var METHODNAME = "WCHybridJS.wlCommonInit ";
    if (wlInitOptions.enableLogger) {
        WL.Logger.debug(METHODNAME + "ENTRY");
    }

    WCLocalStorageJS.loadDevSettings();

    // Common initialization code goes here
    if (wlInitOptions.enableLogger) {
        WL.Logger.debug(METHODNAME + "WL.Client.getEnvironment: " + WL.Client.getEnvironment());
        if (window.device) {
            WL.Logger.debug(METHODNAME + "window.device: " + window.device);
            WL.Logger.debug(METHODNAME + "device.platform: " + device.platform);
            WL.Logger.debug(METHODNAME + "device.version: " + device.version);
        }
        WL.Logger.debug(METHODNAME + "EXIT");
    }

};

/**
 * WCHybridCommonJS contains the utility methods common across platforms
 */
var WCHybridCommonJS = (function() {

	return {
		
	    /**
	     * Menu action to the development settings page
	     */
	    openDevSettingsPage: function() {
	        if (document.getElementById("dev_settings_page").className == "hidden") {
	        	document.getElementById("dev_settings_page").className = "wrapper bg_white";
	        } else {
	            WL.Logger.debug("WCHybridCommonJS.openDevSettingsPage Development settings page already opened.");
	        }
	    },
	    
	    /**
	     * Sets the URL of the new page
	     * cordova.xml/cordova.plist must be set to whitelist the target domain.
	     * Otherwise, URL will be opened in an external browser
	     * @param url The URL to be loaded.
	     */
	    openPage: function(url) {
	        if (wlInitOptions.enableLogger) {
	            WL.Logger.debug("WCHybridCommonJS.openPage Opening URL: " + url);
	        }
	        window.location.href = url;
	    },
	    
	    /**
	     * Shows the splash screen div
	     */
	    showSplash: function() {
	    	document.getElementById("dev_settings_page").className = "hidden";
	    	document.getElementById("slide_text").className = "hidden";
	    	document.getElementById("splashscreen").className = "splash_logo_container splash_logo_position splash_logo";
	    },
	    
	    /**
	     * Hides the splash screen div
	     */
	    hideSplash: function() {
	    	document.getElementById("splashscreen").className = "hidden";
	    }
        
	};
	
})();