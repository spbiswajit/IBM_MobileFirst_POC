package com.ibm.commerce.worklight.android.search;

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

import android.app.Activity;
import android.app.SearchManager;
import android.content.Intent;
import android.os.Bundle;
import android.provider.SearchRecentSuggestions;
import android.util.Log;

import com.ibm.commerce.worklight.android.WCHybrid;
import com.ibm.commerce.worklight.android.WCHybridApplication;

/**
 * <code>SearchSuggestionsActivity</code> is used to bring up the search UI, invoked by a 
 * WL.NativePage.show call from {@link NativeSearchSuggestions#launch()} in the web content.
 */
public class SearchSuggestionsActivity extends Activity {

    private static final String LOG_TAG = WCHybrid.LOG_TAG;
    private static final String CLASS_NAME = SearchSuggestionsActivity.class.getSimpleName();

    /**
     * Default constructor
     */
    public SearchSuggestionsActivity() {
        super();
    }

    /**
     * @see android.app.Activity#onCreate(android.os.Bundle)
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        final String METHOD_NAME = CLASS_NAME + ".onCreate";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }

        super.onCreate(savedInstanceState);

        Intent intent = getIntent();
        if (intent != null) {
            WCHybridApplication wcHybridApp = WCHybridApplication.getInstance();
            wcHybridApp.setHostName(intent.getStringExtra("hostName"));
            wcHybridApp.setStoreId(intent.getStringExtra("storeId"));
            wcHybridApp.setCatalogId(intent.getStringExtra("catalogId"));
            wcHybridApp.setLangId(intent.getStringExtra("langId"));
            
            SearchManager sManager = (SearchManager) this.getSystemService(SEARCH_SERVICE);
            sManager.setOnCancelListener(new SearchManager.OnCancelListener() {

                /**
                 * Capture the back button press, which signals the cancel event and finishes the activity
                 * returning control to the host activity
                 * @return nothing
                 */
                @Override
                public void onCancel() {
                    final String METHOD_NAME = CLASS_NAME + ".onCancel";
                    boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
                    if (loggingEnabled) {
                        Log.d(METHOD_NAME, "ENTRY");
                        Log.d(METHOD_NAME, "intent bundle: " + getIntent().getExtras().toString());

                    }

                    setResult(RESULT_CANCELED, null);
                    finish();

                    if (loggingEnabled) {
                        Log.d(METHOD_NAME, "EXIT");
                    }
                }
            });

            //launch the search UI
            onSearchRequested();
        } else {
            if (loggingEnabled) {
            	Log.d(METHOD_NAME, "Intent is null");
                Log.d(METHOD_NAME, "EXIT");
            }
            finish();
        }

        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }

    /**
     * Handles the intent created when a search suggestion is clicked
     * @param intent The intent to be processed
     */
    @Override
    protected void onNewIntent(Intent intent) {
        final String METHOD_NAME = CLASS_NAME + ".onNewIntent";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
            Log.d(METHOD_NAME, "intent: " + intent.toString());
        }

        handleIntent(intent);

        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }

    /**
     * Processes the incoming search intent, saving the search query to the
     * recent history list and sets the query into the returned result
     * @param intent The intent passed on from the onNewIntent() call
     */
    private void handleIntent(Intent intent) {
        final String METHOD_NAME = CLASS_NAME + ".handleIntent";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }
        if (Intent.ACTION_SEARCH.equals(intent.getAction())) {
            String query = "";
            //retrieve the search term from the intent
            query = intent.getStringExtra(SearchManager.QUERY);
            if (query == null) {
                query = intent.getData().toString();
            }

            //add the search term to history
            recordRecentSearchTerm(query);

            Intent searchTermResult = new Intent();
            searchTermResult.putExtra("searchTerm", query);

            setResult(RESULT_OK, searchTermResult);
            finish();
        } else {
            if (loggingEnabled) {
                Log.d(METHOD_NAME, "The intent action is not SEARCH");
            }
            setResult(RESULT_CANCELED, null);
            finish();
        }
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }

    /**
     * Record search term into recent search database.
     * @param searchTerm the search term.
     */
    private void recordRecentSearchTerm(String searchTerm) {
        final String METHOD_NAME = CLASS_NAME + ".recordRecentSearchTerm";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }
        SearchRecentSuggestions suggestions = new SearchRecentSuggestions(this, SearchSuggestionsProvider.AUTHORITY, SearchSuggestionsProvider.MODE);
        suggestions.saveRecentQuery(searchTerm, null);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
    }
}
