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

function setZh_CN() {

	Messages.hostName = "主机名";
	Messages.storeId = "商店标识";
	Messages.storeName = "商店名称";
	Messages.catalogId = "目录标识";
	Messages.previewToken = "预览令牌";
	Messages.langId = "语言";

	Messages.appDisplayName = "WC 综合商店";
	Messages.appDescription = "WC 综合商店";
	Messages.appVersionTitle = "应用程序版本：";
	Messages.loading = "正在装入...";
	Messages.appDisabled = "已禁用此版本的应用程序。应用程序现在将退出。";
	Messages.appDisabledTitle = "应用程序已禁用";
	Messages.getNewVersion = "获取新版本";
	Messages.exitApp = "要退出此应用程序吗？";
	Messages.requiredFieldsMsg1 = "必须填写所有标有（";
	Messages.requiredFieldsMsg2 = "）的字段。";

	Messages.signIn = "登录";
	Messages.signOut = "注销";
	Messages.myAccount = "我的帐户";
	Messages.scan = "扫描";
	Messages.shoppingList = "心愿清单";
	Messages.privacyPolicy = "隐私策略";
	Messages.productCompare = "产品比较";
	Messages.contactUs = "联系我们";
	Messages.settings = "设置";
	Messages.languageCurrency = "语言/货币";
	Messages.featured = "特色";
	Messages.departments = "百货";
	Messages.storeLocator = "商店选择";
	Messages.stores = "商店";
	Messages.cart = "购物车";
	Messages.more = "更多";
	Messages.devSettings = "开发设置";
	Messages.slideUp = "向上滑动以访问设置";

	Messages.OK = "确定";
	Messages.save = "保存";
	Messages.reset = "重新设置";
	Messages.confirm = "确认";
	Messages.cancel = "取消";
	Messages.exit = "退出";
	Messages.optional = "可选";

	//Error messages
	Messages.ERR_EC = "错误";
	Messages.ERR_EC_GENERIC = "此应用程序将停止。发生了意外异常：";
	Messages.ERR_EC_FORM_INCOMPLETE = "请检查是否已完成所有字段。";
	Messages.ERR_EC_STORE_CONNECTION = "连接到商店时发生错误。请稍候重试。";
	Messages.ERR_EC_SERVER_NOT_FOUND = "找不到远程服务器。";
	Messages.ERR_EC_EXIT_QUESTION = "请检查互联网连接是否可用。要退出此应用程序吗？";
	Messages.ERR_EC_NO_INTERNET_ACCESS = "无法访问互联网。";
	Messages.ERR_EC_CHECK_INTERNET_CONNECTION = "请检查设备的互联网连接。";
	Messages.ERR_EC_UNEXPECTED_EXCEPTION = "此应用程序将停止。发生了意外异常：";
	Messages.ERR_EC_HOSTNAME_MISSING = "“主机名”不正确或该值缺失。";
	Messages.ERR_EC_STOREID = "“商店标识”不正确或该值缺失。";
	Messages.ERR_EC_CATALOGID = "“产品目录标识”不正确或该值缺失。";
	Messages.ERR_EC_BARCODE_SCAN = "扫描条形码时发生了错误。请重试扫描。";
	Messages.ERR_EC_BARCODE_SCAN_LAUNCH = "启动条形码扫描仪时发生了错误。";
	Messages.ERR_EC_CONTACTS_LAUNCH = "访问您的联系人信息时发生了错误。";
	Messages.ERR_EC_MAPS_LAUNCH = "启动映射时发生了错误。";

	SupportedLanguages.deviceDefault = "设备缺省值";
	SupportedLanguages.en_US = "美国英语";
	SupportedLanguages.fr_FR = "法语";
	SupportedLanguages.de_DE = "德语";
	SupportedLanguages.it_IT = "意大利语";
	SupportedLanguages.es_ES = "西班牙语";
	SupportedLanguages.pt_BR = "巴西葡萄牙语";
	SupportedLanguages.zh_CN = "简体中文";
	SupportedLanguages.zh_TW = "繁体中文";
	SupportedLanguages.ko_KR = "韩语";
	SupportedLanguages.ja_JP = "日语";
	SupportedLanguages.iw_IL = "希伯来语";
	SupportedLanguages.tr_TR = "土耳其语";
	SupportedLanguages.ru_RU = "俄语";
	SupportedLanguages.ro_RO = "罗马尼亚语";
	SupportedLanguages.pl_PL = "波兰语";
	SupportedLanguages.ar_EG = "阿拉伯语";

	DefaultSupportedLanguages.en_US = "美国英语";
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

function setSystemLocaleZh_CN() {
	LocalizedClientMessages.close = "关闭";
	LocalizedClientMessages.directUpdateNotificationTitle = "有可用更新";
	LocalizedClientMessages.directUpdateNotificationMessage = "有针对应用程序的可用更新（文件大小 {0} MB）。";
	LocalizedClientMessages.directUpdateErrorTitle = "更新失败",
	LocalizedClientMessages.directUpdateErrorMessageNotEnoughStorage = "有针对应用程序的可用更新，但是设备上没有足够的可用空间（需要大小：{0} MB，可用空间：{1} MB）。";
	LocalizedClientMessages.directUpdateErrorMessageFailedDownloadingZipFile = "下载应用程序更新文件失败。";
	LocalizedClientMessages.directUpdateErrorMessageFailedProcessingZipFile = "处理应用程序更新文件失败。";
	LocalizedClientMessages.loading = "正在装入";
	LocalizedClientMessages.reload = "重新装入";
	LocalizedClientMessages.tryAgain = "请重试";
	LocalizedClientMessages.update = "更新";
	LocalizedClientMessages.wlSettings = "Worklight 设置";
};
