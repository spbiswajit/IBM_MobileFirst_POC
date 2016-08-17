package com.ibm.commerce.worklight.android.contacts;

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
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.provider.ContactsContract.CommonDataKinds.Email;
import android.provider.ContactsContract.CommonDataKinds.Nickname;
import android.provider.ContactsContract.CommonDataKinds.Phone;
import android.provider.ContactsContract.CommonDataKinds.StructuredPostal;
import android.util.Log;

/**
 * <code>ContactSelector</code> is a activity used to select contact from the contact
 * list. It's invoked by WL.NativePage.show() from {@link NativeContactsSelector#launch()}
 * in the web content.<p>
 */
public class ContactsSelectorActivity extends Activity {

	private static final String LOG_TAG = WCHybrid.LOG_TAG;
	private static final String CLASS_NAME = ContactsSelectorActivity.class.getSimpleName();
	private static final int CONTACT_PICK_RESULT = 101;
	private boolean isBackButtonPressed = false;
	
	/**
	 * Default constructor
	 */
	public ContactsSelectorActivity() {		
		super();
	}

	/**
	 * @see android.app.Activity#onCreate(android.os.Bundle)
	 */
	@Override
	public void onCreate(Bundle savedInstanceState) {

		super.onCreate(savedInstanceState);
		final String METHOD_NAME = CLASS_NAME + ".onCreate()";
		boolean loggingEnabled = Log.isLoggable(LOG_TAG, Log.DEBUG);
		
		if (loggingEnabled) {
			Log.d(METHOD_NAME, "ENTRY");
		}
		Intent contactPickIntent = new Intent(Intent.ACTION_PICK, ContactsContract.Contacts.CONTENT_URI);
		startActivityForResult(contactPickIntent, CONTACT_PICK_RESULT);
		
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
			Log.d(METHOD_NAME, "ENTRY requestCode = " + requestCode + " resultCode = " + resultCode);
		}
		
		if (RESULT_OK == resultCode) {
	
			switch (requestCode) {
				case CONTACT_PICK_RESULT:
	
					String firstName = "";
					String lastName = "";
					String nickName = "";
					String phone = "";
					String email = "";
					String street = "";
					String city = "";
					String state = "";
					String country = "";
					String pobox = "";
					String postCode = "";
	
					try {
	
						//retrieve name data
						Uri contactData = data.getData();
						String selectedContactId = contactData.getLastPathSegment(); //get the contact ID from the URI
						if (loggingEnabled) {
							Log.d(METHOD_NAME, "selectedContactId: " + selectedContactId);
						}
						Cursor cursorName = getContentResolver().query(
								contactData,
								null,
								null,
								null,
								null);
						if (cursorName.moveToFirst()) {
							String name = cursorName.getString(cursorName.getColumnIndexOrThrow(ContactsContract.Contacts.DISPLAY_NAME));
							String[] nameTokens = name.split(" ");
							int sizeOfNameArray = nameTokens.length;
							String givenName = "";
	
							for(int temp=0; temp < sizeOfNameArray-1; temp++){
								givenName = givenName + " " + nameTokens[temp];
							}
							firstName = nameTokens[0];
							lastName = nameTokens[sizeOfNameArray-1];
						}
						cursorName.close();
						
						//retrieve nickname
						Cursor cursorNickName = getContentResolver().query(
								ContactsContract.Data.CONTENT_URI,
								null,
								ContactsContract.Data._ID + "=?",
								new String[] { selectedContactId },
								null);
						while (cursorNickName.moveToNext()) {
							cursorNickName.close();
							cursorNickName = getContentResolver().query(
									ContactsContract.Data.CONTENT_URI,
									null,
									ContactsContract.Data.CONTACT_ID + " = ? AND " + ContactsContract.Data.MIMETYPE + " = ?",
									new String[] { selectedContactId, ContactsContract.CommonDataKinds.Nickname.CONTENT_ITEM_TYPE},
									null);
							if (cursorNickName.moveToFirst()) {
								nickName = cursorNickName.getString(cursorNickName.getColumnIndex(Nickname.NAME));
							}
						}
						cursorNickName.close();

						//retrieve phone
						String[] projection = new String[] { Phone.DATA };
						Cursor cursorPhone = getContentResolver().query(
								Phone.CONTENT_URI,
								projection,
								Phone.CONTACT_ID + "=?",
								new String[] { selectedContactId },
								null);
						if (cursorPhone.moveToFirst()) {
							phone = cursorPhone.getString(cursorPhone.getColumnIndex(Phone.DATA));
						}
						cursorPhone.close();
	
						//retrieve email
						projection = new String[] { Email.DATA };
						Cursor cursorEmail = getContentResolver().query(  
								Email.CONTENT_URI,
								projection,  
								Email.CONTACT_ID + "=?",  
								new String[] { selectedContactId },
								null); 
						if (cursorEmail.moveToFirst()) {
							email = cursorEmail.getString(cursorEmail.getColumnIndex(Email.DATA));
						}
						cursorEmail.close();
						
						//retrieve address
						projection = new String[] {
								StructuredPostal.STREET, 
								StructuredPostal.CITY,
								StructuredPostal.REGION,
								StructuredPostal.COUNTRY,
								StructuredPostal.POBOX,
								StructuredPostal.POSTCODE
						};
						Cursor cursorAddress = getContentResolver().query(  
								StructuredPostal.CONTENT_URI,
								projection,  
								StructuredPostal.CONTACT_ID + "=?",  
								new String[] { selectedContactId },
								null); 
						if (cursorAddress.moveToFirst()){
							street = cursorAddress.getString(0);
							city = cursorAddress.getString(1);
							state = cursorAddress.getString(2);
							country = cursorAddress.getString(3);
							pobox = cursorAddress.getString(4);
							postCode = cursorAddress.getString(5);
						}
						cursorAddress.close();
	
					} catch (Exception e) {
						Log.e(METHOD_NAME, e.getLocalizedMessage());
					}
	
					//add the objects to the return intent
					Intent contactsResult = new Intent();
					contactsResult.putExtra("firstName", firstName);
					contactsResult.putExtra("lastName", lastName);
					contactsResult.putExtra("nickName", nickName);
					contactsResult.putExtra("phone", phone);
					contactsResult.putExtra("email", email);
					contactsResult.putExtra("street", street);
					contactsResult.putExtra("city", city);
					contactsResult.putExtra("state", state);
					contactsResult.putExtra("country", country);
					contactsResult.putExtra("pobox", pobox);
					contactsResult.putExtra("postCode", postCode);
					
					//return result -1 = OK and contacts data
					setResult(RESULT_OK, contactsResult);
	
					break;
					
				default:
					break;
					
			}

		} else {
			if (loggingEnabled) {
				Log.d(METHOD_NAME, "Activity ResultCode is " + resultCode);
				if (isBackButtonPressed) {
					Log.d(METHOD_NAME, "Back button was pressed");
				}
			}
			
			//TODO: investigate why there is a need to pass in a null intent
			//parameter to reliably get the onNativePageClose method called
			setResult(resultCode, new Intent());
		}

		finish(); //end the activity and return to WebView
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
