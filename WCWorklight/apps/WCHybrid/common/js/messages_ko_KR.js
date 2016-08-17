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

function setKo_KR() {

	Messages.hostName = "호스트 이름";
	Messages.storeId = "상점 ID";
	Messages.storeName = "상점 이름";
	Messages.catalogId = "카탈로그 ID";
	Messages.previewToken = "미리보기 토큰";
	Messages.langId = "언어";

	Messages.appDisplayName = "WC 하이브리드";
	Messages.appDescription = "WC 하이브리드 상점";
	Messages.appVersionTitle = "애플리케이션 버전:";
	Messages.loading = "로드 중...";
	Messages.appDisabled = "이 애플리케이션 버전은 사용할 수 없습니다. 애플리케이션이 지금 종료됩니다.";
	Messages.appDisabledTitle = "애플리케이션 사용 안함";
	Messages.getNewVersion = "새 버전 가져오기";
	Messages.exitApp = "애플리케이션을 종료하시겠습니까?";
	Messages.requiredFieldsMsg1 = "모든 필드는 (";
	Messages.requiredFieldsMsg2 = ")로 표시되어야 합니다.";

	Messages.signIn = "로그인";
	Messages.signOut = "로그아웃";
	Messages.myAccount = "회원 정보";
	Messages.scan = "스캔";
	Messages.shoppingList = "찜 목록";
	Messages.privacyPolicy = "개인정보 보호정책";
	Messages.productCompare = "상품 비교";
	Messages.contactUs = "문의";
	Messages.settings = "설정";
	Messages.languageCurrency = "언어/통화";
	Messages.featured = "기획";
	Messages.departments = "부문";
	Messages.storeLocator = "상점 검색기";
	Messages.stores = "상점";
	Messages.cart = "장바구니";
	Messages.more = "계속";
	Messages.devSettings = "개발 설정";
	Messages.slideUp = "위로 이동하여 설정에 액세스";

	Messages.OK = "확인";
	Messages.save = "저장";
	Messages.reset = "재설정";
	Messages.confirm = "확인";
	Messages.cancel = "취소";
	Messages.exit = "종료";
	Messages.optional = "선택";

	//Error messages
	Messages.ERR_EC = "오류";
	Messages.ERR_EC_GENERIC = "애플리케이션이 중지됩니다. 예기치 않은 예외 발생: ";
	Messages.ERR_EC_FORM_INCOMPLETE = "모든 필드가 완료되었는지 확인하십시오.";
	Messages.ERR_EC_STORE_CONNECTION = "상점에 연결하는 중에 오류가 발생했습니다. 나중에 다시 시도하십시오.";
	Messages.ERR_EC_SERVER_NOT_FOUND = "원격 서버를 찾을 수 없습니다.";
	Messages.ERR_EC_EXIT_QUESTION = "인터넷 연결이 사용 가능한지 확인하십시오. 애플리케이션을 종료하시겠습니까?";
	Messages.ERR_EC_NO_INTERNET_ACCESS = "사용 가능한 인터넷 액세스가 없습니다.";
	Messages.ERR_EC_CHECK_INTERNET_CONNECTION = "장치의 인터넷 연결을 확인하십시오.";
	Messages.ERR_EC_UNEXPECTED_EXCEPTION = "애플리케이션이 중지됩니다. 예기치 않은 예외 발생: ";
	Messages.ERR_EC_HOSTNAME_MISSING = "\'호스트 이름\'이 올바르지 않거나 값이 누락되었습니다.";
	Messages.ERR_EC_STOREID = "\'상점 ID\'가 올바르지 않거나 값이 누락되었습니다.";
	Messages.ERR_EC_CATALOGID = "\'카탈로그 ID\'가 올바르지 않거나 값이 누락되었습니다.";
	Messages.ERR_EC_BARCODE_SCAN = "바코드 스캔 중에 오류가 발생했습니다. 다시 스캔하십시오.";
	Messages.ERR_EC_BARCODE_SCAN_LAUNCH = "바코드 스캐너를 시작하는 중에 오류가 발생했습니다.";
	Messages.ERR_EC_CONTACTS_LAUNCH = "연락처에 액세스하는 중에 오류가 발생했습니다.";
	Messages.ERR_EC_MAPS_LAUNCH = "맵을 시작하는 중에 오류가 발생했습니다.";

	SupportedLanguages.deviceDefault = "장치 기본값";
	SupportedLanguages.en_US = "영어(미국)";
	SupportedLanguages.fr_FR = "프랑스어";
	SupportedLanguages.de_DE = "독일어";
	SupportedLanguages.it_IT = "이탈리아어";
	SupportedLanguages.es_ES = "스페인어";
	SupportedLanguages.pt_BR = "포르투갈어";
	SupportedLanguages.zh_CN = "중국어";
	SupportedLanguages.zh_TW = "대만어";
	SupportedLanguages.ko_KR = "한국어";
	SupportedLanguages.ja_JP = "일본어";
	SupportedLanguages.iw_IL = "히브리어";
	SupportedLanguages.tr_TR = "터키어";
	SupportedLanguages.ru_RU = "러시아어";
	SupportedLanguages.ro_RO = "루마니아어";
	SupportedLanguages.pl_PL = "폴란드어";
	SupportedLanguages.ar_EG = "아라비아어";

	DefaultSupportedLanguages.en_US = "영어(미국)";
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

function setSystemLocaleKo_KR() {
	LocalizedClientMessages.close = "닫기";
	LocalizedClientMessages.directUpdateNotificationTitle = "업데이트 가능";
	LocalizedClientMessages.directUpdateNotificationMessage = "애플리케이션의 업테이트가 가능합니다. (파일 크기 {0} MB).";
	LocalizedClientMessages.directUpdateErrorTitle = "업데이트 실패",
	LocalizedClientMessages.directUpdateErrorMessageNotEnoughStorage = "애플리케이션의 업데이트가 가능하지만, 디바이스에 충분한 공간이 없습니다.  (필요한 공간: {0} MB, 사용가능한 공간: {1} MB).";
	LocalizedClientMessages.directUpdateErrorMessageFailedDownloadingZipFile = "애플리케이션 업데이트 파일 다운로드에 실패했습니다.";
	LocalizedClientMessages.directUpdateErrorMessageFailedProcessingZipFile = "업데이트 파일 처리에 실패했습니다.";
	LocalizedClientMessages.loading = "로딩중";
	LocalizedClientMessages.reload = "다시 로드";
	LocalizedClientMessages.tryAgain = "다시 시도";
	LocalizedClientMessages.update = "업데이트";
	LocalizedClientMessages.wlSettings = "Worklight 설정";
};
