if (this.asPopup == undefined) {
	this.asPopup = new Object();
	asPopup.popups = {};
	asPopup.events = new Object();
	asPopup.windows = [];
	asPopup.swf = thisMovie(callbackID);
	asPopup.callback = function(rest) {
		if (asPopup.swf != undefined) {
			var params = "";
			for (var i = 0; i < rest.length; ++i){
				params += rest[i];
				if (i < rest.length - 1) params += ', ';
			}
			asPopup.swf.callback(params);
		}
	}
	asPopup.options = options;
}
function thisMovie(movieName) {
	if (navigator.appName.indexOf("Microsoft") != -1) {
		return window[movieName];
	} else {
		return document[movieName];
	}
}

function Open() {
	function(URL, options, timeout, callbackID) {
		
		var idIndex = asPopup.windows.length;
		
		asPopup.setTopLeft();	
		asPopup.setWindowOptions();
		
		asPopup.openWindow();
		
		asPopup.checkHeight();
		asPopup.browserWindowSize();
		asPopup.FindBrowserDimensions();
	
		asPopup.autoClose();
		
		return idIndex;
	}
}

function HtmlInjection(HTML, options, timeout, css, callbackID) {	
	var idIndex = asPopup.windows.length;
	
	asPopup.browserWinWidth = 0;
	asPopup.browserWinHeight = 0;
	
	asPopup.setTopLeft();	
	asPopup.setWindowOptions();
	asPopup.openHtmlInjectionWindow();
	asPopup.checkHeight();
	asPopup.browserWindowSize();
	asPopup.FindBrowserDimensions();
	
	asPopup.autoClose();

	return idIndex;
}








asPopup.setTopLeft = function() {
	asPopup.optionString = "";
	asPopup.valArray = [];
	if (asPopup.options.x < 0 && asPopup.options.y < 0 && asPopup.options.align == "") {
		
	}
	else if (asPopup.options.x < 0 && asPopup.options.y < 0 && asPopup.options.align == "TL") {
		
	}
	else {
		var align = asPopup.options.align.toLowerCase();
		
		asPopup.top = 0; 
		asPopup.left = 0;
		var windowWidth = asPopup.options.width;
		if (windowWidth == -1) window.outerWidth;
		var windowHeight = asPopup.options.height;
		if (windowHeight == -1) window.outerHeight;
		
		if (align == "") {
			asPopup.top = asPopup.options.y;
			asPopup.left = asPopup.options.x;
		}
		else if (align == 'b') { 
			asPopup.top = screen.availHeight - asPopup.options.y - windowHeight - 62;
			asPopup.left = ((screen.availWidth - windowWidth) / 2) + asPopup.options.x;
		}
		else if (align == 'bl') { 
			asPopup.top = screen.availHeight - asPopup.options.y - windowHeight - 62;
			asPopup.left = asPopup.options.x;
		}
		else if (align == 'br') { 
			asPopup.top = screen.availHeight - asPopup.options.y - windowHeight - 62;
			asPopup.left = screen.availWidth - asPopup.options.x - windowWidth;
		}
		else if (align == 'l') { 
			asPopup.top = ((screen.availHeight - windowHeight) / 2) - asPopup.options.y;
			asPopup.left = asPopup.options.x;
		}
		else if (align == 'r') { 
			asPopup.top = ((screen.availHeight - windowHeight) / 2) - asPopup.options.y;
			asPopup.left = screen.availWidth - asPopup.options.x - windowWidth;
		}
		else if (align == 't') { 
			asPopup.top = asPopup.options.y;
			asPopup.left = ((screen.availWidth - windowWidth) / 2) + asPopup.options.x;
		}
		else if (align == 'tr') { 
			asPopup.top = asPopup.options.y;
			asPopup.left = screen.availWidth - asPopup.options.x - windowWidth;
		}
		else if (align == 'tl') { 
			asPopup.top = asPopup.options.y;
			asPopup.left = asPopup.options.x;
		}
		else if (align == 'm') { 
			asPopup.top = ((screen.availHeight - windowHeight) / 2) - asPopup.options.y;
			asPopup.left = ((screen.availWidth - windowWidth) / 2) + asPopup.options.x;
		}
		asPopup.valArray.push("top=" + asPopup.top);
		asPopup.valArray.push("left=" + asPopup.left);
	}
}

asPopup.setWindowOptions = function() {
	
	if (asPopup.options.width == -1) asPopup.options.width = window.outerWidth;
	if (asPopup.options.height == -1) asPopup.options.height = window.outerHeight;
	
	for (var key in asPopup.options) {
		var obj = asPopup.options[key];
		if (key != "x" && key != "y" && key != "align" && key != "callback") {
			if (obj == true) obj = "yes";
			else if (obj == false) obj = "no";
			asPopup.valArray.push(key + "=" + obj);
		}
	}
	for (var i = 0; i < asPopup.valArray.length; ++i) {
		asPopup.optionString += asPopup.valArray[i];
		if (i < asPopup.valArray.length - 1) asPopup.optionString += ",";
		
	}
}

asPopup.openWindow = function() {
	asPopup.windows.push(window.open(URL, '_blank', asPopup.optionString));
	asPopup.windows[idIndex].focus();
	asPopup.windows[idIndex].asPopup = asPopup;
	asPopup.windows[idIndex].align = asPopup.options.align;
}

asPopup.openHtmlInjectionWindow = function() {
	
	asPopup.windows.push(window.open("", "_blank", asPopup.optionString));

	var styleElement = document.createElement('style');
	styleElement.setAttribute('type', 'text/css');
	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		styleElement.appendChild(document.createTextNode(css));
	}

	if (navigator.appVersion.indexOf("IE") != -1) 
	{
		asPopup.windows[idIndex].document.write('<!DOCTYPE html>\n');
		asPopup.windows[idIndex].document.write('<html>\n');
		asPopup.windows[idIndex].document.write('\t<head>\n');
		asPopup.windows[idIndex].document.write('\t\t<style type="text/css">\n');
		asPopup.windows[idIndex].document.write('\t\t\t'+css+'\n');
		asPopup.windows[idIndex].document.write('\t\t</style>\n');
		asPopup.windows[idIndex].document.write('\t</head>\n');
		asPopup.windows[idIndex].document.write('\t<body>\n');
		asPopup.windows[idIndex].document.write('\t\t'+HTML+'\n');
		asPopup.windows[idIndex].document.write('\t</body>\n');
		asPopup.windows[idIndex].document.write('</html>');
	}
	else {
		asPopup.windows[idIndex].document.write(HTML);
		var head = asPopup.windows[idIndex].document.getElementsByTagName('head')[0];
		head.appendChild(styleElement);
	}
	asPopup.windows[idIndex].focus();
	asPopup.windows[idIndex].asPopup = asPopup;
	asPopup.windows[idIndex].align = asPopup.options.align;
}


asPopup.checkHeight = function() {
	if (asPopup.options.height != -1 && asPopup.options.height < 100) {
		var retryCount = 0;
		asPopup.windows[idIndex].offsetWidth = 0, asPopup.windows[idIndex].offsetHeight = 0;
		asPopup.windows[idIndex].resizeTo(0, 0);
		setTimeout('delayCall()', 100);
	}
	function delayCall() {
		asPopup.browserWindowSize();
		asPopup.windows[idIndex].resizeTo(asPopup.windowWidth, asPopup.windowHeight);
	}
}

asPopup.browserWindowSize = function() {
	
	
	console.log('browserWindowSize');
	asPopup.FindBrowserDimensions();
	
	console.log(window);
	var minOffset = (100 - asPopup.options.height);
	if (minOffset < 0) minOffset = 0;
	
	if (navigator.userAgent.indexOf("Firefox") != -1)  {
		asPopup.windows[idIndex].offsetWidth = 14;
		asPopup.windows[idIndex].offsetHeight = asPopup.browserWinHeight - 5;
	}
	else {
		asPopup.windows[idIndex].offsetWidth = asPopup.options.width - asPopup.browserWinWidth;
		asPopup.windows[idIndex].offsetHeight = asPopup.options.height - asPopup.browserWinHeight + minOffset;
	}
	if (asPopup.windows[idIndex].offsetWidth < 0) asPopup.windows[idIndex].offsetWidth = 0;
	if (asPopup.windows[idIndex].offsetHeight < 0) asPopup.windows[idIndex].offsetHeight = 0;
	
	asPopup.windowWidth = asPopup.options.width + asPopup.windows[idIndex].offsetWidth;
	asPopup.windowHeight = asPopup.options.height + asPopup.windows[idIndex].offsetHeight;
	
	console.log('asPopup.browserWinWidth = ' + asPopup.browserWinWidth);
	console.log('asPopup.windows[idIndex].outerHeight = ' + asPopup.windows[idIndex].outerHeight);
	console.log('asPopup.windows[idIndex].innerHeight = ' + asPopup.windows[idIndex].innerHeight);
	console.log('asPopup.windows[idIndex].document.height = ' + asPopup.windows[idIndex].document.height);
	console.log('asPopup.windowHeight = ' + asPopup.windowHeight);
		
}

asPopup.FindBrowserDimensions = function() {
	if( typeof( asPopup.windows[idIndex].innerWidth ) == 'number' ) {
		if (navigator.userAgent.indexOf("Firefox") != -1)  {
			asPopup.browserWinWidth = asPopup.windows[idIndex].outerWidth;
			asPopup.browserWinHeight = asPopup.windows[idIndex].outerHeight;
		}
		else {
			asPopup.browserWinWidth = asPopup.windows[idIndex].innerWidth;
			asPopup.browserWinHeight = asPopup.windows[idIndex].innerHeight;
		}
		
	} else if( asPopup.windows[idIndex].document.documentElement && ( asPopup.windows[idIndex].document.documentElement.clientWidth || asPopup.windows[idIndex].document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
		asPopup.browserWinWidth = asPopup.windows[idIndex].document.documentElement.clientWidth;
		asPopup.browserWinHeight = asPopup.windows[idIndex].document.documentElement.clientHeight;
	} else if( asPopup.windows[idIndex].document.body && ( asPopup.windows[idIndex].document.body.clientWidth || asPopup.windows[idIndex].document.body.clientHeight ) ) {
		//IE 4 compatible
		asPopup.browserWinWidth = asPopup.windows[idIndex].document.body.clientWidth;
		asPopup.browserWinHeight = asPopup.windows[idIndex].document.body.clientHeight;
	}
}

asPopup.autoClose = function(){
	if (timeout != 0) {
		timeout *= 1000;
		setTimeout('asPopup.AutoClose()', timeout);
	}

	asPopup.AutoClose = function() {
		asPopup.windows[idIndex].close();
	}
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

asPopup.CloseAll = function(){
	if (this.asPopup == undefined) {
		this.asPopup = new Object();
		asPopup.popups = {};
		asPopup.events = new Object();
		asPopup.windows = [];
	}
	for (var i = 0; i < asPopup.windows.length; ++i){
		if (asPopup.windows[i] != undefined){
			asPopup.windows[i].close();
			asPopup.windows[i] = undefined;
		}
	}
	asPopup.windows = [];
}

asPopup.isOpen = function(id){
	if (this.asPopup == undefined) return false;
	else {
		if (asPopup.windows[id] == undefined) return false;
		else {
			if (asPopup.windows[id].closed) return false;
			else return true;
		}
	}
}

asPopup.SetWindowX = function(id,value){
	if (this.asPopup != undefined) {
		if (asPopup.windows[id] != undefined) {
			asPopup.options.x = value;
			asPopup.setTopLeft();
			asPopup.setWindowOptions();
			asPopup.windows[id].moveTo(asPopup.left, asPopup.windows[id].screenY);
		}
	}
}

asPopup.GetWindowX = function(id){
	if (this.asPopup != undefined) {
		if (asPopup.windows[id] != undefined) {
			return asPopup.windows[id].screenX;
		}
	}
	return 0;
}

asPopup.SetWindowY = function(id, value) {
	if (this.asPopup != undefined) {
		if (asPopup.windows[id] != undefined) {
			
			asPopup.options.y = value;
			asPopup.setTopLeft();
			asPopup.setWindowOptions();
			
			asPopup.windows[id].moveTo(asPopup.windows[id].screenX, asPopup.top);
		}
	}
}

asPopup.GetWindowY = function(id){
	if (this.asPopup != undefined) {
		if (asPopup.windows[id] != undefined) {
			return asPopup.windows[id].screenY;
		}
	}
	return 0;
}

asPopup.SetWindowAlign = function(id, value) {
	if (this.asPopup != undefined) {
		if (asPopup.windows[id] != undefined) {
			asPopup.options.align = value;
			asPopup.setTopLeft();
			asPopup.setWindowOptions();
			asPopup.windows[id].moveTo(asPopup.left, asPopup.top);
		}
	}
}

asPopup.GetWindowAlign = function(id){
	if (this.asPopup != undefined) {
		if (asPopup.windows[id] != undefined) {
			return asPopup.windows[id].align;
		}
	}
	return 0;
}


asPopup.SetWindowWidth = function(id,value){
	if (this.asPopup != undefined) {
		if (asPopup.windows[id] != undefined) {
			asPopup.options.width = value;
			asPopup.windows[id].offsetWidth = 0, asPopup.windows[id].offsetHeight = 0;
			asPopup.windows[id].resizeTo(0, 0);
			setTimeout('asPopup.delayCall()', 100);	
		}
	}
	asPopup.delayCall = function() {
		asPopup.browserWindowSize();
		asPopup.windows[id].resizeTo(asPopup.windowWidth, asPopup.windows[id].outerHeight);
	}
}


asPopup.GetWindowWidth = function(id) {
	var returnVal = 0;
	if (this.asPopup != undefined) {
		if (asPopup.windows[id] != undefined) {
			if( typeof( asPopup.windows[id].innerWidth ) == 'number' ) {
				returnVal = asPopup.windows[id].outerWidth - asPopup.windows[id].offsetWidth;
			} else if( asPopup.windows[id].document.documentElement && ( asPopup.windows[id].document.documentElement.clientWidth || asPopup.windows[id].document.documentElement.clientHeight ) ) {
				returnVal = asPopup.windows[id].document.documentElement.clientWidth - asPopup.windows[id].offsetWidth;
			} else if( asPopup.windows[id].document.body && ( asPopup.windows[id].document.body.clientWidth || asPopup.windows[id].document.body.clientHeight ) ) {
				returnVal = asPopup.windows[id].document.body.clientWidth - asPopup.windows[id].offsetWidth;
			}
		}
	}
	return returnVal;
}


asPopup.SetWindowHeight = function (id,value){
	if (this.asPopup != undefined) {
		if (asPopup.windows[id] != undefined) {
			asPopup.options.height = value;
			asPopup.windows[id].offsetWidth = 0, asPopup.windows[id].offsetHeight = 0;
			asPopup.windows[id].resizeTo(0, 0);
			setTimeout('asPopup.delayCall()', 100);	
		}
	}
	asPopup.delayCall = function() {
		asPopup.browserWindowSize();
		asPopup.windows[id].resizeTo(asPopup.windows[id].outerWidth, asPopup.windowHeight);
	}
}


asPopup.GetWindowHeight = function(id){
	if (this.asPopup != undefined) {
		if (asPopup.windows[id] != undefined) {
			if( typeof( asPopup.windows[id].innerHeight ) == 'number' ) {
				return asPopup.windows[id].outerHeight - asPopup.windows[id].offsetHeight;
			} else if( asPopup.windows[id].document.documentElement && ( asPopup.windows[id].document.documentElement.clientHeight || asPopup.windows[id].document.documentElement.clientHeight ) ) {
				return asPopup.windows[id].document.documentElement.clientHeight - asPopup.windows[id].offsetHeight;
			} else if( asPopup.windows[id].document.body && ( asPopup.windows[id].document.body.clientHeight || asPopup.windows[id].document.body.clientHeight ) ) {
				return asPopup.windows[id].document.body.clientHeight - asPopup.windows[id].offsetHeight;
			}
		}
	}
	return 0;
}