package com.ibm.commerce.worklight.android.barcode;

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

import com.ibm.commerce.worklight.android.WCHybrid;

import android.app.Activity;
import android.content.Intent;
import android.hardware.Camera;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;

/**
 * <code>BarcodeScanActivity</code> is a activity used to scan a barcode to bring up a store item.
 * It's invoked by WL.NativePage.show() from {@link BarcodeScan#launch()} in the web content.<p>
 */
public class BarcodeScanActivity extends Activity {

    private static final String LOG_TAG = WCHybrid.LOG_TAG;
    private static final String CLASS_NAME = BarcodeScanActivity.class.getSimpleName();
    private static final int SCAN_REQUEST_CODE = 100;
    private boolean isBackButtonPressed = false;
    private String scanResultFormatKey = null;
    private String scanResultKey = null;
    
    /**
     * Default constructor
     */
    public BarcodeScanActivity() {      
        super();
    }

    /**
     * @see android.app.Activity#onCreate(android.os.Bundle)
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {

        final String METHOD_NAME = CLASS_NAME + ".onCreate()";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }
        
        super.onCreate(savedInstanceState);
        Intent callerIntent = getIntent();
        try {
            if (loggingEnabled) {
                Log.d(METHOD_NAME, "about to invoke scan app/lib activity");
            }
            String intentString = callerIntent.getStringExtra("scanIntent");
            String packageString = callerIntent.getStringExtra("scanPackage");
            scanResultFormatKey = callerIntent.getStringExtra("scanResultFormatKey");
            scanResultKey = callerIntent.getStringExtra("scanResultKey");
            
            Intent intent = new Intent(intentString);
            intent.setPackage(packageString);
            startActivityForResult(intent, SCAN_REQUEST_CODE);
            
        } catch (Exception e) {
            Log.e(METHOD_NAME, "exception: " + e.toString());
            try {
                Camera.open();
                Intent intent = new Intent(Intent.ACTION_VIEW);
                String packageURLString = callerIntent.getStringExtra("scanPackageURL");
                intent.setData(Uri.parse(packageURLString));
                startActivity(intent);
            } catch (Exception e1) {
                Log.e(METHOD_NAME, "exception: " + e1.toString());
            }
        }
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }

    /**
     * @see android.app.Activity#onActivityResult(android.os.Bundle)
     */
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {

        final String METHOD_NAME = CLASS_NAME + ".onActivityResult()";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY requestCode = " + requestCode + " resultCode = " + resultCode + " data: " + data);
        }
        try {
            if (RESULT_OK == resultCode) {
        
                switch (requestCode) {
                    case SCAN_REQUEST_CODE:
        
                        String format = data.getStringExtra(scanResultFormatKey);
                        String contents = data.getStringExtra(scanResultKey);

                        if (loggingEnabled) {
                            Log.d(METHOD_NAME, "scanResultFormatKey: " + scanResultFormatKey + " format: " + format);
                            Log.d(METHOD_NAME, "scanResultKey: " + scanResultKey + " scan result: " + contents);
                        }
                        
                        //add the objects to the return intent
                        Intent scanResult = new Intent();
                        scanResult.putExtra(scanResultFormatKey, format);
                        scanResult.putExtra(scanResultKey, contents);
                        
                        //return result -1 = OK and scanned data
                        setResult(RESULT_OK, scanResult);
                        break;
                        
                    default:
                        break;
                }

            } else {
                if (loggingEnabled) {
                    Log.d(METHOD_NAME, "Activity ResultCode is " + resultCode);
                    if (resultCode == RESULT_CANCELED) {
                        Log.d(METHOD_NAME, "The scan request is cancelled.");
                    }
                    if (isBackButtonPressed) {
                        Log.d(METHOD_NAME, "Back button was pressed");
                    }
                }
                setResult(resultCode, new Intent());
            }
        } catch (Exception e) {
            Log.e(METHOD_NAME, "Failed to search for scanned result: " + data.getStringExtra(scanResultKey));
            setResult(resultCode, new Intent());
        } finally {
            finish(); //end the activity and return to WebView
        }
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }
    
    /**
     * @see android.app.Activity#onBackPressed(android.os.Bundle)
     */
    @Override
    public void onBackPressed() {
        final String METHOD_NAME = CLASS_NAME + ".onBackPressed()";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }

        isBackButtonPressed = true;
        setResult(RESULT_CANCELED); //calls this.onActivityResult with a result code of 0

        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }

}
