package com.ibm.commerce.worklight.android;

/*
 ******************************************************************
 * Licensed Materials - Property of IBM
 *
 * WebSphere Commerce
 *
 * (C) Copyright IBM Corp. 2013 All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp.
 *******************************************************************
 *
 *******************************************************************
 * The sample contained herein is provided to you "AS IS".
 *
 * It is furnished by IBM as a simple example and has not been  
 * thoroughly tested
 * under all conditions.  IBM, therefore, cannot guarantee its 
 * reliability, serviceability or functionality.  
 *
 * This sample may include the names of individuals, companies, brands 
 * and products in order to illustrate concepts as completely as 
 * possible.  All of these names
 * are fictitious and any similarity to the names and addresses used by 
 * actual persons 
 * or business enterprises is entirely coincidental.
 *******************************************************************
*/

import java.util.HashMap;
import java.util.Map;

import android.app.Application;
import android.net.Uri;
import android.util.Log;

/**
 * <code>WCHybridApplication</code> subclasses {@link android.app.Application}
 * to store global information to be shared between activities.
 */
public class WCHybridApplication extends Application {
    
    private static final String LOG_TAG = WCHybrid.LOG_TAG;
    private static final String CLASS_NAME = WCHybridApplication.class.getSimpleName();
    
    private String hostName = null;
    private String storeId = null;
    private String catalogId = null;
    private String langId = null;
    
    private static WCHybridApplication instance = null;
    
    /**
     * Called during application initialization
     * @param savedInstanceState The saved instance state
     */
    @Override
    public void onCreate() {
        final String METHOD_NAME = CLASS_NAME + ".onCreate";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }
        super.onCreate();
        instance = this;
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }
    
    /**
     * Gets the <code>WCHybridApplication</code> instance
     * @return The <code>WCHybridApplication</code> instance object
     */
    public static WCHybridApplication getInstance() {
        return instance;
    }
    
    /**
     * Build URL for store web view usage
     * @param hostName the request host name
     * @param path the path of request web page
     * @param queryParameters the query parameters that appended after path
     * @param isSecure whether the request should be SSL secured
     * @return the URI
     */
    public static Uri buildUrl(String hostName, String path, Map<String, String> queryParameters, boolean isSecure) {
        final String METHOD_NAME = CLASS_NAME + ".buildUrl";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }
        Uri.Builder uriBuilder = new Uri.Builder();
        String schema = isSecure == true ? WCHybridConstants.HTTPS_SCHEMA : WCHybridConstants.HTTP_SCHEMA;
        uriBuilder.scheme(schema);
        uriBuilder.authority(hostName);
        uriBuilder.appendEncodedPath(path);
        if (queryParameters != null) {
            for (String aKey : queryParameters.keySet()) {
                uriBuilder.appendQueryParameter(aKey, queryParameters.get(aKey));
            }
        }
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
        return uriBuilder.build();
    }
    
    /**
     * Gets the search suggestion URL with query string
     * @param query The search query string
     * @return The search URL
     */
    public Uri getSearchSuggestionUrl(String query) {
        final String METHOD_NAME = CLASS_NAME + ".getSearchSuggestionUrl";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }

        Uri searchSuggestionUrl = null;
        String path = getString(com.ibm.commerce.worklight.android.R.string.wc_search_suggestion_url_path);

        Map<String, String> queryParameters = new HashMap<String, String>();
        queryParameters.put(WCHybridConstants.STORE_ID, getStoreId());
        queryParameters.put(WCHybridConstants.CATALOG_ID, getCatalogId());
        queryParameters.put(WCHybridConstants.LANGUAGE_ID, getLangId());
        queryParameters.put(WCHybridConstants.SEARCH_TERM, query);
        searchSuggestionUrl = buildUrl(getHostName(), path, queryParameters, false);

        if (loggingEnabled) {
            Log.d(METHOD_NAME, "Search suggestion URL: " + searchSuggestionUrl);
            Log.d(METHOD_NAME, "EXIT");
        }

        return searchSuggestionUrl;
    }
    
    /**
     * Retrieves the Commerce server hostname
     * @return The Commerce server hostname
     */
    public String getHostName() {
        return hostName;
    }
    
    /**
     * Retrieves the store identifier
     * @return The store identifier
     */
    public String getStoreId() {
        return storeId;
    }
    
    /**
     * Retrieves the catalog identifier
     * @return The catalog identifier
     */
    public String getCatalogId() {
        return catalogId;
    }
    
    /**
     * Retrieves the language identifier
     * @return The language identifier
     */
    public String getLangId() {
        return langId;
    }
    
    /**
     * Sets the Commerce Server hostname
     * @param hostName The hostname
     */
    public void setHostName(String hostName) {
        this.hostName = hostName;
    }

    /**
     * Sets the store identifier
     * @param storeId The store identifier
     */
    public void setStoreId(String storeId) {
        this.storeId = storeId;
    }

    /**
     * Sets the catalog identifier
     * @param catalogId The catalog identifier
     */
    public void setCatalogId(String catalogId) {
        this.catalogId = catalogId;
    }
    
    /**
     * Sets the language identifier
     * @param langId The language identifier
     */
    public void setLangId(String langId) {
        this.langId = langId;
    }

}
