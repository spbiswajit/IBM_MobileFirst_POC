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

function setPl_PL() {

	Messages.hostName = "Nazwa hosta";
	Messages.storeId = "Identyfikator sklepu";
	Messages.storeName = "Nazwa sklepu";
	Messages.catalogId = "Identyfikator katalogu";
	Messages.previewToken = "Znacznik podglądu";
	Messages.langId = "Język";

	Messages.appDisplayName = "Klient hybrydowy WebSphere Commerce";
	Messages.appDescription = "Sklep hybrydowy WebSphere Commerce";
	Messages.appVersionTitle = "Wersja aplikacji:";
	Messages.loading = "Ładowanie...";
	Messages.appDisabled = "Ta wersja aplikacji została wyłączona. Aplikacja zakończy teraz działanie.";
	Messages.appDisabledTitle = "Aplikacja została wyłączona";
	Messages.getNewVersion = "Pobierz nową wersję";
	Messages.exitApp = "Czy wyjść z aplikacji?";
	Messages.requiredFieldsMsg1 = "Wszystkie pola oznaczone znakiem (";
	Messages.requiredFieldsMsg2 = ") są wymagane.";

	Messages.signIn = "Zaloguj";
	Messages.signOut = "Wyloguj";
	Messages.myAccount = "Moje konto";
	Messages.scan = "Skanuj";
	Messages.shoppingList = "Lista życzeń";
	Messages.privacyPolicy = "Ochrona prywatności";
	Messages.productCompare = "Porównanie produktów";
	Messages.contactUs = "Kontakt";
	Messages.settings = "Ustawienia";
	Messages.languageCurrency = "Język/waluta";
	Messages.featured = "Wyróżnione";
	Messages.departments = "Działy";
	Messages.storeLocator = "Lokalizator sklepu";
	Messages.stores = "Sklepy";
	Messages.cart = "Koszyk";
	Messages.more = "Więcej";
	Messages.devSettings = "Ustawienia programistyczne";
	Messages.slideUp = "przesuń w górę, aby uzyskać dostęp do ustawień";

	Messages.OK = "OK";
	Messages.save = "Zapisz";
	Messages.reset = "Wyczyść";
	Messages.confirm = "Potwierdzenie";
	Messages.cancel = "Anuluj";
	Messages.exit = "Wyjście";
	Messages.optional = "Opcjonalne";

	//Error messages
	Messages.ERR_EC = "Błąd";
	Messages.ERR_EC_GENERIC = "Aplikacja zostanie zatrzymana. Wystąpił nieoczekiwany wyjątek: ";
	Messages.ERR_EC_FORM_INCOMPLETE = "Sprawdź, czy wszystkie pola są wypełnione.";
	Messages.ERR_EC_STORE_CONNECTION = "Wystąpił błąd podczas nawiązywania połączenia ze sklepem. Ponów próbę później.";
	Messages.ERR_EC_SERVER_NOT_FOUND = "Nie znaleziono zdalnego serwera.";
	Messages.ERR_EC_EXIT_QUESTION = "Sprawdź, czy jest możliwe nawiązanie połączenia z Internetem. Czy wyjść z aplikacji?";
	Messages.ERR_EC_NO_INTERNET_ACCESS = "Brak dostępu do Internetu.";
	Messages.ERR_EC_CHECK_INTERNET_CONNECTION = "Sprawdź połączenie urządzenia z Internetem.";
	Messages.ERR_EC_UNEXPECTED_EXCEPTION = "Aplikacja zostanie zatrzymana. Wystąpił nieoczekiwany wyjątek: ";
	Messages.ERR_EC_HOSTNAME_MISSING = "Nazwa hosta jest niepoprawna lub brakuje tej wartości.";
	Messages.ERR_EC_STOREID = "Identyfikator sklepu jest niepoprawny lub brakuje tej wartości.";
	Messages.ERR_EC_CATALOGID = "Identyfikator katalogu jest niepoprawny lub brakuje tej wartości.";
	Messages.ERR_EC_BARCODE_SCAN = "Podczas skanowania kodu paskowego wystąpił błąd. Ponów próbę skanowania.";
	Messages.ERR_EC_BARCODE_SCAN_LAUNCH = "Podczas uruchamiania skanera kodów paskowych wystąpił błąd.";
	Messages.ERR_EC_CONTACTS_LAUNCH = "Podczas uzyskiwania dostępu do kontaktów użytkownika wystąpił błąd.";
	Messages.ERR_EC_MAPS_LAUNCH = "Podczas uruchamiania map wystąpił błąd.";

	SupportedLanguages.deviceDefault = "Wartość domyślna dla urządzenia";
	SupportedLanguages.en_US = "angielski (Stany Zjednoczone)";
	SupportedLanguages.fr_FR = "francuski";
	SupportedLanguages.de_DE = "niemiecki";
	SupportedLanguages.it_IT = "włoski";
	SupportedLanguages.es_ES = "hiszpański";
	SupportedLanguages.pt_BR = "portugalski (Brazylia)";
	SupportedLanguages.zh_CN = "chiński uproszczony";
	SupportedLanguages.zh_TW = "chiński tradycyjny";
	SupportedLanguages.ko_KR = "koreański";
	SupportedLanguages.ja_JP = "japoński";
	SupportedLanguages.iw_IL = "hebrajski";
	SupportedLanguages.tr_TR = "turecki";
	SupportedLanguages.ru_RU = "rosyjski";
	SupportedLanguages.ro_RO = "rumuński";
	SupportedLanguages.pl_PL = "polski";
	SupportedLanguages.ar_EG = "arabski";

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
	DefaultSupportedLanguages.pl_PL = "polski";
	DefaultSupportedLanguages.ar_EG = "عربية";
};

function setSystemLocalePl_PL() {
	LocalizedClientMessages.close = "Zamknij";
	LocalizedClientMessages.directUpdateNotificationTitle = "Dostępna jest aktualizacja";
	LocalizedClientMessages.directUpdateNotificationMessage = "Dostępna jest aktualizacja aplikacji (wielkość pliku: {0} MB).";
	LocalizedClientMessages.directUpdateErrorTitle = "Aktualizacja nie powiodła się",
	LocalizedClientMessages.directUpdateErrorMessageNotEnoughStorage = "Dostępna jest aktualizacja aplikacji, ale urządzenie nie ma wystarczającej ilości miejsca (wymagana wielkość: {0} MB, dostępne miejsce: {1} MB).";
	LocalizedClientMessages.directUpdateErrorMessageFailedDownloadingZipFile = "Pobieranie pliku aktualizacji aplikacji nie powiodło się.";
	LocalizedClientMessages.directUpdateErrorMessageFailedProcessingZipFile = "Przetwarzanie pliku aktualizacji aplikacji nie powiodło się.";
	LocalizedClientMessages.loading = "Ładowanie";
	LocalizedClientMessages.reload = "Przeładuj";
	LocalizedClientMessages.tryAgain = "Spróbuj ponownie";
	LocalizedClientMessages.update = "Aktualizuj";
	LocalizedClientMessages.wlSettings = "Ustawienia platformy Worklight";
};
