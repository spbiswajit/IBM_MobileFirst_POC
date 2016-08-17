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

// NLS_CHARSET=UTF-8

function setRo_RO() {

	Messages.hostName = "Nume gazdă";
	Messages.storeId = "ID magazin";
	Messages.storeName = "Nume Magazin";
	Messages.catalogId = "ID catalog";
	Messages.previewToken = "Previzualizare jeton";
	Messages.langId = "Limbă";

	Messages.appDisplayName = "WC Hybrid";
	Messages.appDescription = "Magazin WC Hybrid";
	Messages.appVersionTitle = "Versiune aplicaţie:";
	Messages.loading = "Încărcare ...";
	Messages.appDisabled = "Această versiune a aplicaţiei a fost dezactivată. Aplicaţia va ieşi.";
	Messages.appDisabledTitle = "Aplicaţia este dezactivată";
	Messages.getNewVersion = "Obţineţi o versiune nouă";
	Messages.exitApp = "Doriţi să ieşiţi din aplicaţie?";
	Messages.requiredFieldsMsg1 = "Toate câmpurile marcate cu un (";
	Messages.requiredFieldsMsg2 = ") sunt obligatorii.";

	Messages.signIn = "Semnare";
	Messages.signOut = "Anulare semnare";
	Messages.myAccount = "Contul meu";
	Messages.scan = "Scanare";
	Messages.shoppingList = "Lista de dorinţe";
	Messages.privacyPolicy = "Politica de confidenţialitate";
	Messages.productCompare = "Comparare produs";
	Messages.contactUs = "Contactaţi-ne";
	Messages.settings = "Setări";
	Messages.languageCurrency = "Limbă / Monedă";
	Messages.featured = "Specifice";
	Messages.departments = "Departamente";
	Messages.storeLocator = "Locator magazine";
	Messages.stores = "Depozite";
	Messages.cart = "Coş";
	Messages.more = "Mai multe";
	Messages.devSettings = "Setări pentru dezvoltare";
	Messages.slideUp = "derulaţi în sus pentru a accesa setările";

	Messages.OK = "OK";
	Messages.save = "Salvare";
	Messages.reset = "Resetare";
	Messages.confirm = "Confirmare";
	Messages.cancel = "Anulare";
	Messages.exit = "Ieşire";
	Messages.optional = "Opţional";

	//Error messages
	Messages.ERR_EC = "Eroare";
	Messages.ERR_EC_GENERIC = "Aplicaţia va fi oprită. A apărut o excepţie neaşteptată: ";
	Messages.ERR_EC_FORM_INCOMPLETE = "Verificaţi că sunt completate toate câmpurile.";
	Messages.ERR_EC_STORE_CONNECTION = "A apărut o eroare la conectarea la magazin. Încercaţi din nou mai târziu.";
	Messages.ERR_EC_SERVER_NOT_FOUND = "Nu a fost găsit serverul la distanţă.";
	Messages.ERR_EC_EXIT_QUESTION = "Verificaţi că este disponibilă conexiunea la Internet. Doriţi să ieşiţi din aplicaţie?";
	Messages.ERR_EC_NO_INTERNET_ACCESS = "Nu este disponibil accesul la Internet.";
	Messages.ERR_EC_CHECK_INTERNET_CONNECTION = "Verificaţi-vă conexiunea dispozitivului dumneavoastră la internet\.";
	Messages.ERR_EC_UNEXPECTED_EXCEPTION = "Aplicaţia va fi oprită. A apărut o excepţie neaşteptată: ";
	Messages.ERR_EC_HOSTNAME_MISSING = "\'Nume gazdă\' este incorect sau îi lipseşte valoarea.";
	Messages.ERR_EC_STOREID = "\'ID magazin\' este incorect sau îi lipseşte valoarea.";
	Messages.ERR_EC_CATALOGID = "\'ID catalog\' este incorect sau îi lipseşte valoarea.";
	Messages.ERR_EC_BARCODE_SCAN = "A apărut o eroare în timpul scanării codurilor de bare. Încercaţi scanarea din nou.";
	Messages.ERR_EC_BARCODE_SCAN_LAUNCH = "A survenit o eroare în timpul lansării scanerului de coduri de bare.";
	Messages.ERR_EC_CONTACTS_LAUNCH = "A survenit o eroare în timpul accesării contactelor dumneavoastră.";
	Messages.ERR_EC_MAPS_LAUNCH = "A survenit o eroare în timpul lansării mapărilor.";

	SupportedLanguages.deviceDefault = "Implicită dispozitiv";
	SupportedLanguages.en_US = "Engleză americană";
	SupportedLanguages.fr_FR = "Franceză";
	SupportedLanguages.de_DE = "Germană";
	SupportedLanguages.it_IT = "Italiană";
	SupportedLanguages.es_ES = "Spaniolă";
	SupportedLanguages.pt_BR = "Portugheză braziliană";
	SupportedLanguages.zh_CN = "Chineză simplificată";
	SupportedLanguages.zh_TW = "Chineză tradiţională";
	SupportedLanguages.ko_KR = "Coreană";
	SupportedLanguages.ja_JP = "Japonez";
	SupportedLanguages.iw_IL = "Ebraică";
	SupportedLanguages.tr_TR = "Turcă";
	SupportedLanguages.ru_RU = "Rusă";
	SupportedLanguages.ro_RO = "Română";
	SupportedLanguages.pl_PL = "Poloneză";
	SupportedLanguages.ar_EG = "Arabă";

	DefaultSupportedLanguages.en_US = "Engleză americană";
	DefaultSupportedLanguages.fr_FR = "Français";
	DefaultSupportedLanguages.de_DE = "Deutsch";
	DefaultSupportedLanguages.it_IT = "Italiano";
	DefaultSupportedLanguages.es_ES = "Español";
	DefaultSupportedLanguages.pt_BR = "Português do Brasil";
	DefaultSupportedLanguages.zh_CN = "简体中文";
	DefaultSupportedLanguages.zh_TW = "繁體中文";
	DefaultSupportedLanguages.ko_KR = "한국어";
	DefaultSupportedLanguages.ja_JP = "日本語";
	DefaultSupportedLanguages.iw_IL = "עברית";
	DefaultSupportedLanguages.tr_TR = "Türkçe";
	DefaultSupportedLanguages.ru_RU = "русский";
	DefaultSupportedLanguages.ro_RO = "Română";
	DefaultSupportedLanguages.pl_PL = "polski";
	DefaultSupportedLanguages.ar_EG = "عربية";
};

function setSystemLocaleRo_RO() {
	LocalizedClientMessages.close = "Închidere";
	LocalizedClientMessages.directUpdateNotificationTitle = "Este disponibilă o actualizare.";
	LocalizedClientMessages.directUpdateNotificationMessage = "Este disponibilă o actualizare pentru aplicaţie (dimensiune fişier {0} MB).";
	LocalizedClientMessages.directUpdateErrorTitle = "Actualizarea a eşuat",
	LocalizedClientMessages.directUpdateErrorMessageNotEnoughStorage = "Este disponibilă o actualizare pentru aplicaţie, dar nu este spaţiu suficient disponibil pe dispozitiv (dimensiunea cerută: {0} MB, spaţiu disponibil: {1} MB).";
	LocalizedClientMessages.directUpdateErrorMessageFailedDownloadingZipFile = "A eşuat descărcarea fişierului de actualizare aplicaţie.";
	LocalizedClientMessages.directUpdateErrorMessageFailedProcessingZipFile = "A eşuat procesarea fişierului de actualizare aplicaţie.";
	LocalizedClientMessages.loading = "Încărcare";
	LocalizedClientMessages.reload = "Reîncărcare";
	LocalizedClientMessages.tryAgain = "Încercaţi din nou";
	LocalizedClientMessages.update = "Actualizare";
	LocalizedClientMessages.wlSettings = "Setări Worklight";
};
