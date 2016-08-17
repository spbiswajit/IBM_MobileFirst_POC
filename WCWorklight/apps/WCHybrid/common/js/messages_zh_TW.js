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

function setZh_TW() {

	Messages.hostName = "主機名稱";
	Messages.storeId = "商店 ID";
	Messages.storeName = "商店名稱";
	Messages.catalogId = "型錄 ID";
	Messages.previewToken = "預覽記號";
	Messages.langId = "語言";

	Messages.appDisplayName = "WC 混合式";
	Messages.appDescription = "WC 混合式商店";
	Messages.appVersionTitle = "應用程式版本：";
	Messages.loading = "載入中...";
	Messages.appDisabled = "已停用這個版本的應用程式。應用程式將立即結束。";
	Messages.appDisabledTitle = "應用程式已停用";
	Messages.getNewVersion = "取得新版本";
	Messages.exitApp = "您要結束應用程式嗎？";
	Messages.requiredFieldsMsg1 = "標示為 (";
	Messages.requiredFieldsMsg2 = ") 的所有欄位都是必要欄位。";

	Messages.signIn = "登入";
	Messages.signOut = "登出";
	Messages.myAccount = "我的帳戶";
	Messages.scan = "掃描";
	Messages.shoppingList = "欲購商品清單";
	Messages.privacyPolicy = "隱私權條款";
	Messages.productCompare = "產品比較";
	Messages.contactUs = "聯絡我們";
	Messages.settings = "設定";
	Messages.languageCurrency = "語言/貨幣";
	Messages.featured = "精選";
	Messages.departments = "部門";
	Messages.storeLocator = "商店定位器";
	Messages.stores = "商店";
	Messages.cart = "購物車";
	Messages.more = "更多";
	Messages.devSettings = "開發設定";
	Messages.slideUp = "向上滑動，以存取設定";

	Messages.OK = "確定";
	Messages.save = "儲存";
	Messages.reset = "重設";
	Messages.confirm = "確認";
	Messages.cancel = "取消";
	Messages.exit = "結束";
	Messages.optional = "選用";

	//Error messages
	Messages.ERR_EC = "錯誤";
	Messages.ERR_EC_GENERIC = "將停止應用程式。發生非預期的異常狀況：";
	Messages.ERR_EC_FORM_INCOMPLETE = "請檢查是否完成所有欄位。";
	Messages.ERR_EC_STORE_CONNECTION = "連接至商店時發生錯誤。請稍後再試。";
	Messages.ERR_EC_SERVER_NOT_FOUND = "找不到遠端伺服器。";
	Messages.ERR_EC_EXIT_QUESTION = "檢查網際網路連線可用。您要結束應用程式嗎？";
	Messages.ERR_EC_NO_INTERNET_ACCESS = "沒有可用的網際網路存取。";
	Messages.ERR_EC_CHECK_INTERNET_CONNECTION = "請檢查裝置的網際網路連線。";
	Messages.ERR_EC_UNEXPECTED_EXCEPTION = "將停止應用程式。發生非預期的異常狀況：";
	Messages.ERR_EC_HOSTNAME_MISSING = "「主機名稱」不正確，或遺漏了值。";
	Messages.ERR_EC_STOREID = "「商店 ID」不正確，或遺漏了值。";
	Messages.ERR_EC_CATALOGID = "「型錄 ID」不正確，或遺漏了值。";
	Messages.ERR_EC_BARCODE_SCAN = "在條碼掃描的期間發生錯誤。請重試掃描。";
	Messages.ERR_EC_BARCODE_SCAN_LAUNCH = "啟動條碼掃描器時發生錯誤。";
	Messages.ERR_EC_CONTACTS_LAUNCH = "存取您的聯絡人時發生錯誤。";
	Messages.ERR_EC_MAPS_LAUNCH = "啟動對映時發生錯誤。";

	SupportedLanguages.deviceDefault = "裝置預設值";
	SupportedLanguages.en_US = "美式英文";
	SupportedLanguages.fr_FR = "法文";
	SupportedLanguages.de_DE = "德文";
	SupportedLanguages.it_IT = "義大利文";
	SupportedLanguages.es_ES = "西班牙文";
	SupportedLanguages.pt_BR = "巴西葡萄牙文";
	SupportedLanguages.zh_CN = "簡體中文";
	SupportedLanguages.zh_TW = "繁體中文";
	SupportedLanguages.ko_KR = "韓文";
	SupportedLanguages.ja_JP = "日式";
	SupportedLanguages.iw_IL = "希伯來文";
	SupportedLanguages.tr_TR = "土耳其文";
	SupportedLanguages.ru_RU = "俄文";
	SupportedLanguages.ro_RO = "羅馬尼亞文";
	SupportedLanguages.pl_PL = "波蘭文";
	SupportedLanguages.ar_EG = "阿拉伯文";

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

function setSystemLocaleZh_TW() {
	LocalizedClientMessages.close = "關閉";
	LocalizedClientMessages.directUpdateNotificationTitle = "有可用的更新";
	LocalizedClientMessages.directUpdateNotificationMessage = "有應用程式可用的更新（檔案大小 {0} MB）。";
	LocalizedClientMessages.directUpdateErrorTitle = "更新失敗",
	LocalizedClientMessages.directUpdateErrorMessageNotEnoughStorage = "有應用程式可用的更新，但是在裝置上沒有足夠的可用空間（需要大小：{0} MB，可用空間：{1} MB）。"; 	
 LocalizedClientMessages.directUpdateErrorMessageFailedDownloadingZipFile = "下載應用程式更新檔案失敗。";
	LocalizedClientMessages.directUpdateErrorMessageFailedProcessingZipFile = "處理應用程式更新檔案失敗。";
	LocalizedClientMessages.loading = "載入中";
	LocalizedClientMessages.reload = "重新載入";
	LocalizedClientMessages.tryAgain = "重試";
	LocalizedClientMessages.update = "更新";
	LocalizedClientMessages.wlSettings = "Worklight 設定";
};
