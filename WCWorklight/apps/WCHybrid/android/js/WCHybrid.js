/*
 *-----------------------------------------------------------------
 * Licensed Materials - Property of IBM
 *
 * WebSphere Commerce
 *
 * (C) Copyright IBM Corp. 2012 All Rights Reserved.
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
 * Calls to run environment specific Worklight initialization. 
 * This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
 */
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}

/**
 * WCHybridJS contains the utility functions for the app
 */
var WCHybridJS = (function() {

    return {

        /**
         * Perform the actions when back button is pressed
         */
        onBackKeyDown: function() {
            var METHODNAME = "WCHybridJS.onBackKeyDown";
            if (wlInitOptions.enableLogger) {
                WL.Logger.debug(METHODNAME + "ENTRY");
            }
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
            if (wlInitOptions.enableLogger) {
                WL.Logger.debug(METHODNAME + "EXIT");
            }
        },

        /**
         * Called when Cordova runtime has initialized
         */
        onDeviceReady: function() {
            var METHODNAME = "WCHybridJS.onDeviceReady";
            if (wlInitOptions.enableLogger) {
                WL.Logger.debug(METHODNAME + "ENTRY");
            }

            //bind the hardware back button event listener
            document.addEventListener("backbutton", WCHybridJS.onBackKeyDown, false);

            if (wlInitOptions.enableLogger) {
                WL.Logger.debug(METHODNAME + "EXIT");
            }
        }
        
    };

})();
