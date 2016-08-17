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

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.SearchManager;
import android.content.Intent;
import android.content.SearchRecentSuggestionsProvider;
import android.database.Cursor;
import android.database.MatrixCursor;
import android.net.Uri;
import android.provider.BaseColumns;
import android.util.Log;

import com.ibm.commerce.worklight.android.WCHybrid;
import com.ibm.commerce.worklight.android.WCHybridApplication;

/**
 * <code>SearchSuggestionsProvider</code> creates the search suggestions and 
 * recent search queries.
 */
public class SearchSuggestionsProvider extends SearchRecentSuggestionsProvider {

    private static final String LOG_TAG = WCHybrid.LOG_TAG;
    private static final String CLASS_NAME = SearchSuggestionsProvider.class.getSimpleName();

    private static final int MAX_RECENT_TERM = 5;
    private static final int HTTP_TIME_OUT = 3000;
    private static final String[] COLUMNS = {
        BaseColumns._ID,
        SearchManager.SUGGEST_COLUMN_TEXT_1,
        SearchManager.SUGGEST_COLUMN_ICON_1,
        /* remove comment to add the second suggestion line*/
        // SearchManager.SUGGEST_COLUMN_TEXT_2,
        SearchManager.SUGGEST_COLUMN_INTENT_DATA,
        SearchManager.SUGGEST_COLUMN_INTENT_ACTION,
        SearchManager.SUGGEST_COLUMN_SHORTCUT_ID
    };

    /**
     * The fully qualified class name of the search suggestion provider
     */
    public static final String AUTHORITY = SearchSuggestionsProvider.class.getName();

    /**
     * The database mode for the search queries
     */
    public static final int MODE = SearchRecentSuggestionsProvider.DATABASE_MODE_QUERIES;

    /**
     * @see SearchRecentSuggestionsProvider#onCreate()
     */
    public boolean onCreate() {
        final String METHOD_NAME = CLASS_NAME + ".onCreate()";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }
        
        setupSuggestions(AUTHORITY, MODE);

        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }

        return super.onCreate();
    }

    /**
     * Performs the search by projections and selection arguments
     * @param uri The URI to be used
     * @param projection The string array for the search
     * @param selection The selection string
     * @param selectionArgs The selection arguments
     * @param sortOrder The sort order
     * @return The cursor containing the suggestions
     */
    @Override
    public Cursor query(Uri uri, String[] projection, String selection, String[] selectionArgs, String sortOrder) {
        final String METHOD_NAME = CLASS_NAME + ".query()";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }

        int id = 1;
        MatrixCursor suggestionCursor = new MatrixCursor(COLUMNS);
        Cursor recentSearchCursor = null;

        try {
            recentSearchCursor = super.query(uri, projection, selection, selectionArgs, sortOrder);
            // get search history
            if (recentSearchCursor != null) {
                int searchTermIndex = recentSearchCursor.getColumnIndex(SearchManager.SUGGEST_COLUMN_TEXT_1);
                while (recentSearchCursor.moveToNext() && id <= MAX_RECENT_TERM) {
                    suggestionCursor.addRow(createRecentRow(id, recentSearchCursor.getString(searchTermIndex)));
                    id++;
                }
            }
        } finally {
            if (recentSearchCursor != null) {
                recentSearchCursor.close();
                recentSearchCursor = null;
            }
        }

        // get search suggestion
        if (selectionArgs[0] != null && !selectionArgs[0].equals("")) {
            List<String> suggestionList = getSearchTermSuggestions(selectionArgs[0]);
            if (suggestionList != null) {
                for (String aSuggestion : suggestionList) {
                    suggestionCursor.addRow(createSuggestionRow(id, aSuggestion));
                    id++;
                }
            }
        }

        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }

        return suggestionCursor;
    }

    /**
     * Creates the search result row
     * @param id
     * @param suggestWord
     * @param icon
     * @return
     */
    private Object[] createRow(Integer id, String suggestWord, int icon) {
        return new Object[] { 
                id, 
                suggestWord,
                icon,
                suggestWord,
                Intent.ACTION_SEARCH,
                SearchManager.SUGGEST_NEVER_MAKE_SHORTCUT};
    }

    /**
     * Create a search result suggestion row
     * @param id
     * @param aSuggestion
     * @return The search suggestion row object
     */
    private Object[] createSuggestionRow(int id, String aSuggestion) {
        return createRow(id, aSuggestion, android.R.drawable.ic_menu_search) ;
    }

    /**
     * Create a recent history suggestion row
     * @param id
     * @param aSuggestion
     * @return The recent search history row object
     */
    private Object[] createRecentRow(int id, String aSuggestion) {
        return createRow(id, aSuggestion, android.R.drawable.ic_menu_recent_history);
    }

    /**
     * Retrieves the search suggestion JSON array and constructs the search suggestions list
     * For example, the JSON array would follow a similar structure, using a search on the 
     * term 'dress':
     * 
     * {'terms':
     *     [
     *      {'dress':'766'},
     *      {'dress empire':'62'},
     *      {'dress empire waist':'62'},
     *      {'dress layered':'57'},
     *      ...
     *     ]
     * }
     * 
     * @param string The query term input into the search dialog
     * @return The list of search term suggestions
     */
    private List<String> getSearchTermSuggestions(String query) {
        final String METHOD_NAME = CLASS_NAME + ".getSearchTermSuggestions";
        boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
        if (loggingEnabled) {
            Log.d(METHOD_NAME, "ENTRY");
        }

        List<String> suggestionList = null;
        if (query == null || query.equals("")) {
            return suggestionList;
        }

        WCHybridApplication wcHybridApp = WCHybridApplication.getInstance();
        String requestUrl = wcHybridApp.getSearchSuggestionUrl(query).toString();
        String suggestionJsonString = null;
        HttpParams httpParams = new BasicHttpParams();
        HttpConnectionParams.setConnectionTimeout(httpParams, HTTP_TIME_OUT);
        HttpClient httpClient = new DefaultHttpClient(httpParams);

        try {
            suggestionJsonString = httpClient.execute(new HttpGet(requestUrl), new BasicResponseHandler());
        } catch (ClientProtocolException e) {
            Log.d(METHOD_NAME, "Error getting search suggestion JSON: " + e.getLocalizedMessage());
        } catch (IOException e) {
            Log.d(METHOD_NAME, "Error getting search suggestion JSON: " + e.getLocalizedMessage());
        } finally {
            httpClient.getConnectionManager().shutdown();
        }

        if (suggestionJsonString != null && !suggestionJsonString.equals("")) {
            try {
                if (loggingEnabled) {
                    Log.d(METHOD_NAME, "Suggestion JSON string: " + suggestionJsonString);
                }
                JSONObject json = new JSONObject(suggestionJsonString);
                JSONArray suggestions = json.getJSONArray("terms");
                if (suggestions != null) {
                    suggestionList = new ArrayList<String>(suggestions.length());
                    for (int i = 0; i < suggestions.length(); i++) {
                        suggestionList.add(suggestions.getJSONObject(i).names().getString(0));
                    }
                }
            } catch (JSONException e) {
                Log.d(METHOD_NAME, "Error parsing search suggestion JSON: " + e.getLocalizedMessage());
            }
        }

        if (loggingEnabled) {
            Log.d(METHOD_NAME, "EXIT");
        }
        return suggestionList;
    }

}
