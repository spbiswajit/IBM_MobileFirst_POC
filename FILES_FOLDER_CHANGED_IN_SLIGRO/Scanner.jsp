<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://commerce.ibm.com/base" prefix="wcbase" %>
<%@ taglib uri="flow.tld" prefix="flow" %>
<%@ include file="../../Common/EnvironmentSetup.jspf" %>
<%@ include file="../../Common/nocache.jspf" %>
<%@ taglib uri="http://commerce.ibm.com/foundation" prefix="wcf" %>             
<%@ taglib uri="http://commerce.ibm.com/coremetrics"  prefix="cm" %>
<%@ include file="../../include/ErrorMessageSetup.jspf" %>

<wcf:url var="ScannerDetailViewURL" value="SligroScannerProcessView">
	<wcf:param name="langId" value="${langId}" />
	<wcf:param name="storeId" value="${WCParam.storeId}" />
	<wcf:param name="catalogId" value="${WCParam.catalogId}" />
</wcf:url>



<fmt:message bundle="${storeText}" key="SCANNER_TITLE" var="contentPageName" scope="request"/>

<!DOCTYPE HTML>

<%--
 =================================================================
  Licensed Materials - Property of IBM

  WebSphere Commerce

  (C) Copyright IBM Corp. 2008, 2014 All Rights Reserved.

  US Government Users Restricted Rights - Use, duplication or
  disclosure restricted by GSA ADP Schedule Contract with
  IBM Corp.
 =================================================================
--%>
<!-- BEGIN Scanner.jsp -->
<html xmlns="http://www.w3.org/1999/xhtml"
xmlns:wairole="http://www.w3.org/2005/01/wai-rdf/GUIRoleTaxonomy#"
xmlns:waistate="http://www.w3.org/2005/07/aaa" lang="${shortLocale}" xml:lang="${shortLocale}">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<!-- Mimic Internet Explorer 7 -->
	<link href="<c:out value="${jspStoreImgDir}${env_vfileStylesheet}"/>" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="<c:out value="${jspStoreImgDir}${vfileStylesheetprint}"/>" type="text/css" media="print"/>
	<%@ include file="../../Common/CommonJSToInclude.jspf"%>
	
	
	<script type="text/javascript" src="<c:out value="${jsAssetsDir}javascript/UserArea/AddressHelper.js"/>"></script>
	<script type="text/javascript" src="<c:out value="${jsAssetsDir}javascript/UserArea/LogonForm.js"/>"></script>
	<script type="text/javascript" src="<c:out value="${jsAssetsDir}javascript/Widgets/ScannerSection/ScannerSection.js"/>"></script>
	
	<script>
                
	   function doScan(){
	       cordova.exec(onScanSuccess, onScanFailure, 'BarcodeScanner', 'scan', []);
	   }
	   
	   function doScanIos(){
           cordova.exec(onScanSuccess, onScanFailure, 'org.apache.cordova.barcodeScanner', 'scan', []);
       }
	
	   function onScanSuccess(result) {
	    
	           document.getElementById("productScannerDataNonIE").value = result.text;
	           //alert(result.format);
	           document.getElementById("scannerFormSection").submit();
	   }
	
	   function onScanFailure(error) {
	     alert("Scanning failed: " + error);
	   }
	</script>
	
	<c:if test="${isBrazilStore}"> 
	</c:if>
	
	<%@ include file="../../Common/CommonJSPFToInclude.jspf"%>
		
	<title><fmt:message bundle="${storeText}" key="SCANNER_TITLE"/></title>

<script type="text/javascript">
	require(["dojo/cookie"]);
	dojo.addOnLoad(function() {
		<fmt:message bundle="${storeText}" key="CANNOT_RENEW_NOW_MSG" var="CANNOT_RENEW_NOW_MSG"/>
		MessageHelper.setMessage("MO_ORDER_CANCELED_MSG", <wcf:json object="${MO_ORDER_CANCELED_MSG}"/>);	
	});
</script>
 
</head>
<body>
 
<!-- Page Start -->
<div id="page" class="nonRWDPage">
	<div id="grayOut"></div>
	<!-- Header Widget -->
	<div class="header_wrapper_position" id="headerWidget">
		<%out.flush();%>
		<c:import url = "${env_jspStoreDir}/Widgets/Header/Header.jsp" />
		<%out.flush();%>
	</div>
	
	<script type="text/javascript">
		if('<wcf:out value="${WCParam.page}" escapeFormat="js"/>'=='quickcheckout'){
			dojo.addOnLoad(function() { 
				MessageHelper.displayStatusMessage(storeNLS["QC_UPDATE_SUCCESS"]);
			});
		}
	</script>

	<c:set var="action" value="recurring_order"/>
	<%@ include file="../../Snippets/Subscription/CancelPopup.jspf" %>
	<c:set var="action" value="subscription"/>
	<%@ include file="../../Snippets/Subscription/CancelPopup.jspf" %>
	
	<!-- Main Content Start -->
	<div id="contentWrapper">
		<div id="content" role="main">
			<div class="rowContainer" id="container_MyAccountDisplayB2B">
				<div class="row margin-true">
					<div class="col12">				
						<%out.flush();%>
							<c:import url="${env_siteWidgetsDir}com.ibm.commerce.store.widgets.BreadcrumbTrail/BreadcrumbTrail.jsp">  														
								<c:param name="pageGroup" value="Content"/>
							</c:import>
						<%out.flush();%>					
					</div>
				</div>
				<div class="row margin-true">					
					<div class="col4 acol12 ccol3">
						<%out.flush();%>
							<c:import url="${env_siteWidgetsDir}com.ibm.commerce.store.widgets.MyAccountNavigation/MyAccountNavigation.jsp"/>
						<%out.flush();%>		
					</div>
					<div class="col8 acol12 ccol9 right" id="scannersSection">	
						<!-- Main Content Start -->
						<div class="main_header" id="WC_MyAccountDisplay_div_5">
							<h1><fmt:message bundle="${storeText}" key='SCANNER_TITLE'/></h1>
						</div>			
						<div class="body" id="WC_MyAccountDisplay_div_13">
							<h4 class="gray">
								<fmt:message bundle='${storeText}' key='SCANNER_STEP_ONE_TITLE' /><strong><fmt:message bundle='${storeText}' key='SCANNER_STEP_ONE_TXT' /></strong> <fmt:message bundle='${storeText}' key='SCANNER_STEP_ONE_TXT_END' />
							</h4>
							<div class="row">
								<div class="col12">
									<div class="scannersImages">
										<ul>
											<li><img src="${jspStoreImgDir}/images/scanner-wire.png" alt="Scanner"></li>
											<li><img src="${jspStoreImgDir}/images/scanner-machine.png" alt="Scanner"></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="row mBottom20">
								<div class="col12">
									<form action="${ScannerDetailViewURL}" method="post" name="scannerFormSection" id="scannerFormSection">
										<input type="hidden" name="storeId" value='<c:out value="${param.storeId}" />' />
										<input type="hidden" name="catalogId" value='<c:out value="${param.catalogId}"/>' />
										<input type="hidden" name="langId" value='<c:out value="${param.langId}"/>' />
										<div id="nonIESection">
											<p><fmt:message bundle='${storeText}' key='SCANNER_READ_ACTIONS' /></p>
											<ol class="mBottom10">
												<li><fmt:message bundle='${storeText}' key='SCANNER_READ_ACTIONS_ONE' /></li>
												<li><fmt:message bundle='${storeText}' key='SCANNER_READ_ACTIONS_TWO' /></li>
												<li><fmt:message bundle='${storeText}' key='SCANNER_READ_ACTIONS_THREE' /> <input class="input_field" onkeyup="ScannerSectionJS.validateScannerData();" id="productScannerDataNonIE" type="text" name="productScanner" data-valid="" value="" /></li>
												<li><fmt:message bundle='${storeText}' key='SCANNER_READ_ACTIONS_FOUR' /></li>
											</ol>
											<input type="submit" onclick="if(jQuery('#productScannerDataNonIE').attr('data-valid') == 'true'){return true;}else{MessageHelper.displayErrorMessage(MessageHelper.messages['SCANNER_INVALID_DATA']);return false;}" class="mLeft20 button_primary" name="submit" value="<fmt:message bundle='${storeText}' key='SCANNER_READ_BUTTON' />" /> 
											
											<!--<c:if test="${_worklightHybridApp}">
												<button type="button" onclick="javascript:doScan();">Scan Using Phone</button>
												<input type="submit" id="scanMobile" class="mLeft20 button_primary" name="scanMobile" onclick="javascript:doScan();" value="Scan Using Mobile"/>
											</c:if>
											-->
											<c:if test="${_worklightHybridApp  && !_worklightiOSHybridApp}">
												<button type="button" onclick="javascript:doScan();">Scan Using Phone</button>
											</c:if>
											<c:if test="${_worklightHybridApp  && _worklightiOSHybridApp}">
												<button type="button" onclick="javascript:doScanIos();">Scan Using Phone</button>
											</c:if>
											
											
											<div data-dojo-type="dijit/form/DropDownButton" id="scannerInfoTooltip">
												<span><span class="fa fa-exclamation-triangle red mLeft10"></span></span>
												<div id="scannerInfoDropdown" data-dojo-type="dijit/TooltipDialog" style="display:none;">
													<div class="widget_site_popup body">
														 <div onclick="javascript:dijit.popup.close(dijit.byId('scannerInfoDropdown'));" class="right" style="cursor:pointer;">
															<i class="fa fa-times green"></i>
														 </div>
														<p><span class="red"><fmt:message bundle='${storeText}' key='SCANNER_TOOLTIP_TXT_RED' /></span> <fmt:message bundle='${storeText}' key='SCANNER_TOOLTIP_TXT_ONE' /></p>
														<p><fmt:message bundle='${storeText}' key='SCANNER_TOOLTIP_TXT_TWO' /></p>
														<p><fmt:message bundle='${storeText}' key='SCANNER_TOOLTIP_TXT_THREE' /></p>
														<div class="pTop10 customCheckBox">
															<input type="checkbox" name="noMsgCheck" onclick="javascript:dojo.cookie('WC_scannerCheck','true', {'path':'/'})" id="msgcheck" value="hide Message">
															<label for="msgcheck" class="green">
																<span class="fa fa-square-o mRight5"></span><fmt:message bundle='${storeText}' key='SCANNER_TOOLTIP_TXT_CHECK' />
															</label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div id="IESection" style="display:none;">
											<p><fmt:message bundle='${storeText}' key='SCANNER_READ_ACTIONS' /></p>
											<ol class="mBottom10">
												<li><fmt:message bundle='${storeText}' key='SCANNER_READ_ACTIONS_ONE' /></li>
												<li><fmt:message bundle='${storeText}' key='SCANNER_READ_ACTIONS_TWO' /></li>
												<li><fmt:message bundle='${storeText}' key='SCANNER_READ_ACTION_CLICK_BUTTON' /></li>
											</ol>
											<input class="input_field" id="productScannerDataIE" type="hidden" name="productScannerDataIE" value="" />
											<input type="submit" class="mLeft20 button_primary" name="submit" value="<fmt:message bundle='${storeText}' key='SCANNER_READ_BUTTON' />" />
										</div>
									</form>
								</div>
							</div>
							<script>
								require(["dijit/popup", "dijit/form/DropDownButton", "dijit/TooltipDialog"]);
								dojo.addOnLoad(function(){
									if(!dojo.cookie("WC_scannerCheck")){
										dijit.popup.open({
									        popup: dijit.byId("scannerInfoDropdown"),
									        around: dojo.byId("scannerInfoTooltip"),
									        orient: ["below"],
									        onExecute: function(){
									            dijit.popup.close(dijit.byId('scannerInfoDropdown'));
									        },
									        onCancel: function(){
									            dijit.popup.close(dijit.byId('scannerInfoDropdown'));
									        },
									        onClose: function(){
									        	dijit.popup.close(dijit.byId('scannerInfoDropdown'));
									        }
								    	});
									}
									
							    	MessageHelper.setMessage("MAINTAIN_ORDER_ERROR_INPUT_FIELD", '<fmt:message bundle="${storeText}" key="MAINTAIN_ORDER_ERROR_INPUT_FIELD" />');
							    	MessageHelper.setMessage("SCANNER_INVALID_DATA", '<fmt:message bundle="${storeText}" key="SCANNER_INVALID_DATA" />');
							    	
							    	//init all function defined within init function
									ScannerSectionJS.init();
									ScannerSectionJS.setProperties('<c:out value="${param.langId}"/>', '<c:out value="${param.storeId}" />', '<c:out value="${param.catalogId}"/>');
								});
							</script>
							<h2 class="pLeft20"><fmt:message bundle='${storeText}' key='SCANNER_DOWNLOADS' /></h2>
							<%out.flush();%>
							<c:import url= "${env_siteWidgetsDir}com.ibm.commerce.store.widgets.ContentRecommendation/ContentRecommendation.jsp">
								<c:param name="storeId" value="${storeId}" />
								<c:param name="catalogId" value="${catalogId}" />
								<c:param name="emsName" value="ScannerEspot" />
								<c:param name="displayPreference" value="1" />
							</c:import>
							<%out.flush();%>
						</div>  
					</div>
				</div>
			</div>			
		</div>
	</div>	
	<!-- Main Content End -->					

	<!-- Footer Start Start -->
	<div class="footer_wrapper_position">
		<%out.flush();%>
		<c:import url = "${env_jspStoreDir}/Widgets/Footer/Footer.jsp" />
		<%out.flush();%>
	</div> 
     <!-- Footer Start End -->
</div>

<flow:ifEnabled feature="Analytics"><cm:pageview pageType="wcs-registration"/></flow:ifEnabled>
<%@ include file="../../Common/JSPFExtToInclude.jspf"%> </body>
</html>
<!-- END Scanner.jsp -->