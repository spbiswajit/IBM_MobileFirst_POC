package com.ibm.commerce.worklight.android.maps;

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
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.util.Log;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;
import com.ibm.commerce.worklight.android.R;
import com.ibm.commerce.worklight.android.WCHybrid;

/**
 * <code>StoreMapActivity</code> is the subclass of <code>android.support.v4.app.FragmentActivity</code>
 * and is used to display physical store geolocation data using the Google Maps Android API V2.
 */
public class StoreMapActivity extends FragmentActivity {

    private static final String LOG_TAG = WCHybrid.LOG_TAG;
    private static final String CLASS_NAME = StoreMapActivity.class.getSimpleName();

    public StoreMapActivity() {

    }

    /**
     * @see android.support.v4.app.FragmentActivity#onCreate(android.os.Bundle)
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        final String METHOD_NAME = CLASS_NAME + ".onCreate()";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);

        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }
        super.onCreate(savedInstanceState);
        setContentView(R.layout.map_layout);

        String centerLatitude = getIntent().getStringExtra("mapCenterLatitude");
        String centerLongitude = getIntent().getStringExtra("mapCenterLongitude");
        String storeName = getIntent().getStringExtra("storeName");
        String storeLatitude = getIntent().getStringExtra("storeLatitude");
        String storeLongitude = getIntent().getStringExtra("storeLongitude");
        String storeCity = getIntent().getStringExtra("storeCity");
        String storeState = getIntent().getStringExtra("storeState");
        String storeAddr1 = getIntent().getStringExtra("storeAddress1");
        String storeAddr2 = getIntent().getStringExtra("storeAddress2");
        String storeAddr3 = getIntent().getStringExtra("storeAddress3");
        if (loggingEnabled) {
            Log.d(METHOD_NAME,
                    new StringBuilder("Intent extras = {centerLatitude: ").append(centerLatitude)
                    .append(", centerLongitude: ").append(centerLongitude)
                    .append(", storeName: ").append(storeName)
                    .append(", storeLatitude: ").append(storeLatitude)
                    .append(", storeLongitude: ").append(storeLongitude)
                    .append(", storeCity: ").append(storeCity)
                    .append(", storeState: ").append(storeState)
                    .append(", storeAddr1: ").append(storeAddr1)
                    .append(", storeAddr2: ").append(storeAddr2)
                    .append(", storeAddr3: ").append(storeAddr3)
                    .append("}")
                    .toString());
        }

        // Obtain the fragment from the layout XML and initialize the map
        GoogleMap map = ((SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.map_fragment)).getMap();

        if (map != null) {
            try {

                // show current location on the map
                map.setMyLocationEnabled(true);

                // create the coordinate set
                LatLng storePosition = null;
                LatLng mapStart = null;

                if ((storeLatitude != null && storeLatitude.length() > 0) || (storeLongitude != null && storeLongitude.length() > 0)) {

                    storePosition = new LatLng(Double.parseDouble(storeLatitude), Double.parseDouble(storeLongitude));

                    // if GPS is not used then load the map at the store coordinates
                    if ((centerLatitude != null && centerLatitude.length() > 0) || (centerLongitude != null && centerLongitude.length() > 0)) {
                        mapStart = new LatLng(Double.parseDouble(centerLatitude), Double.parseDouble(centerLongitude));
                    } else {
                        mapStart = storePosition;
                    }

                    // pan the camera over to the initial coordinates and then move over to the physical store coordinates
                    map.moveCamera(CameraUpdateFactory.newLatLng(mapStart));
                    map.animateCamera(CameraUpdateFactory.newLatLngZoom(storePosition, 15));

                    map.addMarker(new MarkerOptions()
                    .position(storePosition)
                    .title(storeName)
                    .snippet(new StringBuilder(this.getResources().getString(R.string.addressTitle))
                    .append(": ")
                    .append(storeAddr1)
                    .append(", ")
                    .append(storeCity)
                    .append(", ")
                    .append(storeState)
                    .toString()));

                } else {
                    if (loggingEnabled) {
                        Log.d(METHOD_NAME, "Store coordinates are not available");
                    }
                }

            } catch (NumberFormatException e) {
                Log.d(METHOD_NAME, "Store latitude and/or longtiude cannot be parsed into Double");
            } catch (NullPointerException e) {
                Log.d(METHOD_NAME, "Cannot construct string message for marker");
            }

        } else {
            if (loggingEnabled) {
                Log.d(METHOD_NAME, "Map is unavailable. Check the availability of Google Play services.");
            }
        }

        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }

    /**
     * Back button press exits the activity and returns to the store
     * @see android.support.v4.app.FragmentActivity#onBackPressed()
     */
    @Override
    public void onBackPressed() {
        final String METHOD_NAME = CLASS_NAME + ".onBackPressed()";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }
        setResult(RESULT_OK, new Intent());
        finish();
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }

}
