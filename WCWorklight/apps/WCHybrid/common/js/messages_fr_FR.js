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

function setFr_FR() {

	Messages.hostName = "Nom de l'hôte :";
	Messages.storeId = "ID magasin";
	Messages.storeName = "Nom du magasin";
	Messages.catalogId = "ID catalogue";
	Messages.previewToken = "Jeton d'aperçu";
	Messages.langId = "Langue";

	Messages.appDisplayName = "Hybride WC";
	Messages.appDescription = "Magasin hybride WC";
	Messages.appVersionTitle = "Version de l'application :";
	Messages.loading = "Chargement en cours...";
	Messages.appDisabled = "Cette version de l'application a été désactivée. Vous allez maintenant quitter l'application.";
	Messages.appDisabledTitle = "Application désactivée";
	Messages.getNewVersion = "Obtenir la nouvelle version";
	Messages.exitApp = "Voulez-vous quitter l'application ?";
	Messages.requiredFieldsMsg1 = "Toutes les zones marquées par un astérisque (";
	Messages.requiredFieldsMsg2 = ") doivent être renseignées.";

	Messages.signIn = "Se connecter";
	Messages.signOut = "Se déconnecter";
	Messages.myAccount = "Mon compte";
	Messages.scan = "Parcourir";
	Messages.shoppingList = "Liste de présélection";
	Messages.privacyPolicy = "Confidentialité";
	Messages.productCompare = "Comparaison de produits";
	Messages.contactUs = "Nous contacter";
	Messages.settings = "Paramètres";
	Messages.languageCurrency = "Langue/Devise";
	Messages.featured = "En promotion";
	Messages.departments = "Rayons";
	Messages.storeLocator = "Localisateur de magasins";
	Messages.stores = "Magasins";
	Messages.cart = "Panier";
	Messages.more = "Plus";
	Messages.devSettings = "Paramètres de développement";
	Messages.slideUp = "faites glisser vers le haut pour accéder aux paramètres";

	Messages.OK = "OK";
	Messages.save = "Sauvegarder";
	Messages.reset = "Réinitialiser";
	Messages.confirm = "Confirmation";
	Messages.cancel = "Annuler";
	Messages.exit = "Quitter";
	Messages.optional = "Facultatif";

	//Error messages
	Messages.ERR_EC = "Erreur";
	Messages.ERR_EC_GENERIC = "L'application va se fermer. Une exception inattendue est survenue : ";
	Messages.ERR_EC_FORM_INCOMPLETE = "Vérifiez que toutes les zones sont renseignées.";
	Messages.ERR_EC_STORE_CONNECTION = "Une erreur s'est produite lors de la connexion au magasin. Effectuez une nouvelle tentative ultérieurement.";
	Messages.ERR_EC_SERVER_NOT_FOUND = "Le serveur distant est introuvable.";
	Messages.ERR_EC_EXIT_QUESTION = "Vérifiez que la connexion à Internet est disponible. Voulez-vous quitter l'application ?";
	Messages.ERR_EC_NO_INTERNET_ACCESS = "Aucun accès Internet n'est disponible.";
	Messages.ERR_EC_CHECK_INTERNET_CONNECTION = "Vérifiez la connexion à Internet de votre périphérique.";
	Messages.ERR_EC_UNEXPECTED_EXCEPTION = "L'application va se fermer. Une exception inattendue est survenue : ";
	Messages.ERR_EC_HOSTNAME_MISSING = "Le \'Nom d'hôte\' est incorrect ou la valeur est manquante.";
	Messages.ERR_EC_STOREID = "L'\'ID magasin\' est incorrect ou la valeur est manquante.";
	Messages.ERR_EC_CATALOGID = "L'\'ID catalogue\' est incorrect ou la valeur est manquante.";
	Messages.ERR_EC_BARCODE_SCAN = "Une erreur est survenue lors de l'analyse du code à barres. Essayez de l'analyser à nouveau.";
	Messages.ERR_EC_BARCODE_SCAN_LAUNCH = "Une erreur est survenue lors du lancement de l'analyseur de codes à barres.";
	Messages.ERR_EC_CONTACTS_LAUNCH = "Une erreur est survenue lors de l'accès à vos contacts.";
	Messages.ERR_EC_MAPS_LAUNCH = "Une erreur est survenue lors du lancement des mappes.";

	SupportedLanguages.deviceDefault = "Valeur par défaut unité";
	SupportedLanguages.en_US = "Anglais (Etats-Unis)";
	SupportedLanguages.fr_FR = "Français";
	SupportedLanguages.de_DE = "Allemand";
	SupportedLanguages.it_IT = "Italien";
	SupportedLanguages.es_ES = "Espagnol";
	SupportedLanguages.pt_BR = "Portugais (Brésil)";
	SupportedLanguages.zh_CN = "简体中文";
	SupportedLanguages.zh_TW = "繁體中文";
	SupportedLanguages.ko_KR = "Coréen";
	SupportedLanguages.ja_JP = "Japonais";
	SupportedLanguages.iw_IL = "Hébreu";
	SupportedLanguages.tr_TR = "Turc";
	SupportedLanguages.ru_RU = "Russe";
	SupportedLanguages.ro_RO = "Roumain";
	SupportedLanguages.pl_PL = "Polonais";
	SupportedLanguages.ar_EG = "Arabe";

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

function setSystemLocaleFr_FR() {
	LocalizedClientMessages.close = "Fermer";
	LocalizedClientMessages.directUpdateNotificationTitle = "Mise à jour disponible";
	LocalizedClientMessages.directUpdateNotificationMessage = "Une mise à jour de l'application est disponible (taille de fichier {0} Mo).";
	LocalizedClientMessages.directUpdateErrorTitle = "Echec de la mise à jour",
	LocalizedClientMessages.directUpdateErrorMessageNotEnoughStorage = "Une mise à jour de l'application est disponible mais l'espace disponible sur l'appareil est insuffisant (taille requise : {0} Mo, espace disponible : {1} Mo).";
	LocalizedClientMessages.directUpdateErrorMessageFailedDownloadingZipFile = "Echec du téléchargement du fichier de mise à jour de l'application. ";
	LocalizedClientMessages.directUpdateErrorMessageFailedProcessingZipFile = "Echec du traitement du fichier de mise à jour de l'application.";
	LocalizedClientMessages.loading = "Chargement en cours";
	LocalizedClientMessages.reload = "Recharger";
	LocalizedClientMessages.tryAgain = "Réessayez";
	LocalizedClientMessages.update = "Mettre à jour";
	LocalizedClientMessages.wlSettings = "Paramètres Worklight";
};
