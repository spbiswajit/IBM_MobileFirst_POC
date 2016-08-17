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

function setIt_IT() {

	Messages.hostName = "Nome host";
	Messages.storeId = "ID negozio";
	Messages.storeName = "Nome negozio";
	Messages.catalogId = "ID catalogo";
	Messages.previewToken = "Token di anteprima";
	Messages.langId = "Lingua";

	Messages.appDisplayName = "WC Hybrid";
	Messages.appDescription = "Negozio WC Hybrid";
	Messages.appVersionTitle = "Versione applicazione:";
	Messages.loading = "Caricamento in corso...";
	Messages.appDisabled = "Questa versione dell'applicazione è stata disabilitata. L'applicazione verrà chiusa.";
	Messages.appDisabledTitle = "Applicazione disabilitata";
	Messages.getNewVersion = "Ottieni nuova versione";
	Messages.exitApp = "Uscire dall'applicazione?";
	Messages.requiredFieldsMsg1 = "Tutti i campi contrassegnati con (";
	Messages.requiredFieldsMsg2 = ") sono obbligatori.";

	Messages.signIn = "Collegamento";
	Messages.signOut = "Scollegamento";
	Messages.myAccount = "Account";
	Messages.scan = "Scansione";
	Messages.shoppingList = "Elenco interessi";
	Messages.privacyPolicy = "Norme di riservatezza";
	Messages.productCompare = "Confronto tra prodotti";
	Messages.contactUs = "Come contattarci";
	Messages.settings = "Impostazioni";
	Messages.languageCurrency = "Lingua/valuta";
	Messages.featured = "Nuovi";
	Messages.departments = "Reparti";
	Messages.storeLocator = "Localizzatore negozio";
	Messages.stores = "Negozi";
	Messages.cart = "Carrello";
	Messages.more = "Altro";
	Messages.devSettings = "Impostazioni di sviluppo";
	Messages.slideUp = "scorrere verso l'alto per accedere alle impostazioni";

	Messages.OK = "OK";
	Messages.save = "Salva";
	Messages.reset = "Reimposta";
	Messages.confirm = "Conferma";
	Messages.cancel = "Annulla";
	Messages.exit = "Uscita";
	Messages.optional = "Facoltativo";

	//Error messages
	Messages.ERR_EC = "Errore";
	Messages.ERR_EC_GENERIC = "L'applicazione verrà arrestata. Si è verificata un'eccezione imprevista. ";
	Messages.ERR_EC_FORM_INCOMPLETE = "Verificare che tutti i campi siano completi.";
	Messages.ERR_EC_STORE_CONNECTION = "Si è verificato un errore durante la connessione al negozio. Riprovare successivamente.";
	Messages.ERR_EC_SERVER_NOT_FOUND = "Il server remoto non è stato trovato.";
	Messages.ERR_EC_EXIT_QUESTION = "Controllare che la connessione a Internet sia disponibile. Uscire dall'applicazione?";
	Messages.ERR_EC_NO_INTERNET_ACCESS = "Nessun accesso a Internet disponibile.";
	Messages.ERR_EC_CHECK_INTERNET_CONNECTION = "Controllare la connessione a Internet del dispositivo.";
	Messages.ERR_EC_UNEXPECTED_EXCEPTION = "L'applicazione verrà arrestata. Si è verificata un'eccezione imprevista. ";
	Messages.ERR_EC_HOSTNAME_MISSING = "\'Host Name\' non è corretto o manca il valore.";
	Messages.ERR_EC_STOREID = "\'Store ID\' non è corretto o manca il valore.";
	Messages.ERR_EC_CATALOGID = "\'Catalog ID\' non è corretto o manca il valore.";
	Messages.ERR_EC_BARCODE_SCAN = "Si è verificato un errore durante la scansione del codice a barre. Tentare nuovamente la scansione.";
	Messages.ERR_EC_BARCODE_SCAN_LAUNCH = "Si è verificato un errore durante l'avvio dello scanner del codice a barre.";
	Messages.ERR_EC_CONTACTS_LAUNCH = "Si è verificato un errore durante l'accesso ai contatti.";
	Messages.ERR_EC_MAPS_LAUNCH = "Si è verificato un errore durante l'avvio delle mappe.";

	SupportedLanguages.deviceDefault = "Impostazione predefinita dispositivo";
	SupportedLanguages.en_US = "United States English";
	SupportedLanguages.fr_FR = "Francese";
	SupportedLanguages.de_DE = "Tedesco";
	SupportedLanguages.it_IT = "Italiano";
	SupportedLanguages.es_ES = "Spagnolo";
	SupportedLanguages.pt_BR = "Portoghese brasiliano";
	SupportedLanguages.zh_CN = "Cinese semplificato";
	SupportedLanguages.zh_TW = "Cinese tradizionale";
	SupportedLanguages.ko_KR = "Coreano";
	SupportedLanguages.ja_JP = "Giapponese";
	SupportedLanguages.iw_IL = "Ebraico";
	SupportedLanguages.tr_TR = "Turchia";
	SupportedLanguages.ru_RU = "Russo";
	SupportedLanguages.ro_RO = "Rumeno";
	SupportedLanguages.pl_PL = "Polacco";
	SupportedLanguages.ar_EG = "Arabo";

	DefaultSupportedLanguages.en_US = "United States English";
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
	DefaultSupportedLanguages.pl_PL = "Polski";
	DefaultSupportedLanguages.ar_EG = "عربية";
};

function setSystemLocaleIt_IT() {
	LocalizedClientMessages.close = "Chiudi";
	LocalizedClientMessages.directUpdateNotificationTitle = "Aggiornamento disponibile";
	LocalizedClientMessages.directUpdateNotificationMessage = "È disponibile un aggiornamento per l'applicazione (dimensione file {0} MB).";
	LocalizedClientMessages.directUpdateErrorTitle = "Aggiornamento non riuscito",
	LocalizedClientMessages.directUpdateErrorMessageNotEnoughStorage = "È disponibile un aggiornamento per l'applicazione, ma sul dispositivo lo spazio disponibile non è sufficiente (dimensione richiesta: {0} MB, spazio disponibile: {1} MB).";
	LocalizedClientMessages.directUpdateErrorMessageFailedDownloadingZipFile = "Download del file di aggiornamento dell'applicazione non riuscito.";
	LocalizedClientMessages.directUpdateErrorMessageFailedProcessingZipFile = "Elaborazione del file di aggiornamento dell'applicazione non riuscita.";
	LocalizedClientMessages.loading = "Caricamento";
	LocalizedClientMessages.reload = "Ricarica";
	LocalizedClientMessages.tryAgain = "Riprova";
	LocalizedClientMessages.update = "Aggiorna";
	LocalizedClientMessages.wlSettings = "Impostazioni Worklight";
};
