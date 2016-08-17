package com.ibm.commerce.worklight.android;

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

import org.apache.cordova.CordovaActivity;
import org.apache.cordova.CordovaWebViewClient;
import org.apache.cordova.DroidGap;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.net.http.SslError;
import android.util.Log;
import android.webkit.SslErrorHandler;
import android.webkit.WebView;
import android.widget.Toast;

/**
 * WCHybridWebViewClient extends the <code>CordovaWebViewClient</code> with behavior customizations
 * @see CordovaWebViewClient
 */
public class WCHybridWebViewClient extends CordovaWebViewClient {

    private static final String LOG_TAG = WCHybrid.LOG_TAG;
    private static final String CLASS_NAME = WCHybridWebViewClient.class.getSimpleName();
    private CordovaActivity hostActivity = null;

    /**
     * Default constructor
     * @param ctx   the DroidGap application context
     */
    public WCHybridWebViewClient(CordovaActivity ctx) {
        super(ctx);
        hostActivity = ctx;
    }

    /**
     * Override the URL loading so that links are opened within the existing WebView
     * @param view      the existing WebView
     * @param url       target URL
     * @return Whether the host application should handle the URL loading.
     */
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        final String METHOD_NAME = CLASS_NAME + ".shouldOverrideUrlLoading()";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);

        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
            Log.d(METHOD_NAME, "Loading URL: " + url);
        }
        if (!(url.startsWith("http") || url.startsWith("https"))) {
            Intent intent = new Intent();
            intent.setAction(Intent.ACTION_VIEW);
            intent.setData(Uri.parse(url));
            hostActivity.startActivity(intent);
        } else {
            //url.replace("/de/", "/nl/");
            String dummyUrl = url;
            /*if(url.contains("/en/")){
             dummyUrl = url.replace("/en/", "/nl/");
            }*/
            view.loadUrl(dummyUrl);
        }
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
        return true;
    }
    
    /**
     * FOR DEVELOPMENT ONLY - REMOVE BEFORE MOVING TO PRODUCTION
     * Override the default behavior to allow self-signed SSL certificates
     * @param view      the existing WebView
     * @param handler   SSL error handler
     * @param error     the error received from handling the SSL certificate
     */
    @Override
    public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
        final String METHOD_NAME = CLASS_NAME + ".onReceivedSslError()";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }
        handler.proceed();
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }

    /**
     * Handle the reporting of errors in the CordovaWebView to the host activity
     * @param view The WebView that initiated the error callback
     * @param errorCode The error code
     * @param description A string description of the error
     * @param failingUrl The URL that failed to load
     */
    @Override
    public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
        final String METHOD_NAME = CLASS_NAME + ".onReceivedError()";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
            Log.d(METHOD_NAME, new StringBuilder("{view=")
            .append(view.toString())
            .append(" errorCode=")
            .append(errorCode)
            .append(" description=")
            .append(description)
            .append(" failingUrl=")
            .append(failingUrl)
            .append("}")
            .toString());
        }
        //if the following errors are encountered, present a dialog requiring the user to exit the app
        if (errorCode == ERROR_CONNECT || errorCode == ERROR_HOST_LOOKUP || errorCode == ERROR_TIMEOUT || errorCode == ERROR_FILE_NOT_FOUND) {
            AlertDialog.Builder errorDialog = new AlertDialog.Builder(view.getContext());
            errorDialog.setTitle(R.string.error)
            .setMessage(R.string.errorConnectionTimeout)
            .setPositiveButton(R.string.close, new DialogInterface.OnClickListener() {
                /**
                 * Handle the click of the close button
                 * @param dialog The dialog to be closed
                 * @param which The ID of the button clicked
                 * @return nothing
                 */
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    dialog.dismiss();
                    System.exit(0);
                }
            });
            errorDialog.show();
        } else {
            super.onReceivedError(view, errorCode, description, failingUrl);
        }
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }

}
