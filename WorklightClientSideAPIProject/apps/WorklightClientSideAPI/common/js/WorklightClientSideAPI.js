/*
* Licensed Materials - Property of IBM
* 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

var busy;

function wlCommonInit(){

	busy = new WL.BusyIndicator("AppBody", {text : 'Loading. Please wait...', bounceAnimation: true});
	displayInfo();
}

function displayInfo() {
	
	var selectedValue = $('#actions').val();
	var text = "";
	
	switch (selectedValue) {
		case 'language':
			text = WL.App.getDeviceLanguage();
			break;
		case 'appEnvironment':
			text = WL.Client.getEnvironment();
			break;
		default:
			break;
	}
	
	$('#info').html(text);
}

function reload() {
	
	busy.show();
	setTimeout(WL.Client.reloadApp, 5000);
}

function loadWebPage() {
	
	WL.App.openURL('http://m.ibm.com', '_blank');
}