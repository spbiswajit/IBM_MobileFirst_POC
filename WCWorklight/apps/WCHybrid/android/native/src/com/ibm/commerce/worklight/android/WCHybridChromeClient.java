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

import org.apache.cordova.CordovaChromeClient;
import org.apache.cordova.DroidGap;

import android.app.Activity;
import android.app.ProgressDialog;
import android.webkit.WebView;

/**
 * WCHybridChromeClient extends the <code>CordovaChromeClient</code> with behavior customizations
 * @see CordovaChromeClient
 */
public class WCHybridChromeClient extends CordovaChromeClient {

	private static final String LOG_TAG = WCHybrid.LOG_TAG;
	private static final String CLASS_NAME = WCHybridChromeClient.class.getSimpleName();

	private ProgressDialog progressDialog = null;
	private Activity hostActivity = null;
	
	/**
	 * <code>WCHybridChromeClient</code> constructor
	 * @param ctx	the app context, instance of <code>DroidGap</code>
	 */
	public WCHybridChromeClient(DroidGap ctx) {
		super(ctx);
		this.hostActivity = ctx;
	}
	
	/**
	 * Additional actions during web view loading progress
	 * @param view	instance of <code>CordovaWebView</code>
	 * @param progress	percentage progress from 0 to 100
	 */
	@Override
	public void onProgressChanged(WebView view, int progress) {
		super.onProgressChanged(view, progress);

		if (progressDialog == null) {
			progressDialog = new ProgressDialog(hostActivity, R.style.webRequestProgressDialog);
			progressDialog.setCancelable(false);
		}
		
		if (progressDialog != null && !hostActivity.isFinishing()) {
			if (!progressDialog.isShowing()) {
				progressDialog.show();
		    	progressDialog.setContentView(R.layout.progress_dialog);
			}
			progressDialog.setProgress(progress);
			if (progress == 100) {
				progressDialog.dismiss();
				progressDialog = null;
			}
		}
	}

}
