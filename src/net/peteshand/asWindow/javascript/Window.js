function (callbackID) {
	var _this = this;
	var openDelayValue = 2000;
	
	console.log('callbackID = ' + callbackID);
	
	if (this.asWindow == undefined) {
		this.asWindow = new Object();
	}
	
	asWindow.newWindow = function() {
		var windowObject = new WindowObject();
		_this.asWindow.windows.push(windowObject);
		windowObject.index = _this.asWindow.windows.length-1;
		return windowObject.index;
	}
	
	asWindow.openWindow = function(index, url) {
		var windowObject = asWindow.getWindow(index);
		
		windowObject.open(url);
		
		console.log(windowObject.windowRef);
		windowObject.windowRef.onload = function() {
			console.log('onload');
			if (callbackID) asWindow.swf.windowOpen(windowObject.index);
			else asWindow.consoleLog( -1, "Warning, SWF Embed Issue: attributes.name has not been set to the same as the flash embed div's ID, this will prevent callbacks from working");
		}
		
		
		
		windowObject.windowRef.onbeforeunload = function() {
			windowObject.windowState = 'closing';
			if (callbackID) asWindow.swf.windowClose(windowObject.index);
			else asWindow.consoleLog( -1, "Warning, SWF Embed Issue: attributes.name has not been set to the same as the flash embed div's ID, this will prevent callbacks from working");
		}
	}
	
	asWindow.getWindow = function(index) {
		var returnWindow = _this.asWindow.windows[index];
		if (returnWindow == null) returnWindow = window;
		return returnWindow;
	}
	
	
	asWindow.closeWindow = function(index) {
		var windowObject = asWindow.getWindow(index);
		windowObject.close();
	}
	
	asWindow.alert = function(index, msg) {
		var windowObject = asWindow.getWindow(index);
		if (windowObject.windowState == 'open') {
			if (windowObject.sameAsParentDomain == false) alert(msg);
			else windowObject.windowRef.alert(msg);
		}
		else if (windowObject.windowState == 'opening') {
			var _this = this;
			setTimeout(function(){
				if (windowObject.sameAsParentDomain == false) alert(msg);
				else windowObject.windowRef.alert(msg);
			},openDelayValue);
		}
		else {
			alert(msg);
		}
	}
	
	asWindow.consoleLog = function(index, msg) {
		var windowObject = asWindow.getWindow(index);
		if (windowObject.windowState == 'open') {
			if (windowObject.sameAsParentDomain == false) console.log(msg);
			else windowObject.windowRef.console.log(msg);
		}
		else if (windowObject.windowState == 'opening') {
			var _this = this;
			setTimeout(function(){
				if (windowObject.sameAsParentDomain == false) console.log(msg);
				else windowObject.windowRef.console.log(msg);
			},openDelayValue);
		}
		else {
			console.log(msg);
		}
	}
	
	asWindow.prompt = function(index, msg, defaultText) {
		var windowObject = asWindow.getWindow(index);
		if (windowObject.windowState == 'open') {
			if (windowObject.sameAsParentDomain == false) userInput = prompt(msg, defaultText);
			else userInput = windowObject.windowRef.prompt(msg, defaultText);
			fireCallback();
		}
		else if (windowObject.windowState == 'opening') {
			var _this = this;
			setTimeout(function(){
				if (windowObject.sameAsParentDomain == false) userInput = prompt(msg, defaultText);
				else userInput = windowObject.windowRef.prompt(msg, defaultText);
				fireCallback();
			},openDelayValue);
		}
		else {
			userInput = prompt(msg, defaultText);
			fireCallback();
		}
		
		function fireCallback(){
			if (callbackID) asWindow.swf.promptAnswered(windowObject.index, userInput);
			else asWindow.alert( -1, "Warning, SWF Embed Issue: attributes.name has not been set to the same as the flash embed div's ID, this will prevent callbacks from working");
			console.log('userInput = ' + userInput);
		}
	}
	
	asWindow.confirm = function(index, message) {
		
		var windowObject = asWindow.getWindow(index);
		if (windowObject.windowState == 'open') {
			if (windowObject.sameAsParentDomain == false) userAnswer = confirm(message);
			else userAnswer = windowObject.windowRef.confirm(message);
			fireCallback();
		}
		else if (windowObject.windowState == 'opening') {
			var _this = this;
			setTimeout(function(){
				if (windowObject.sameAsParentDomain == false) userAnswer = confirm(message);
				else userAnswer = windowObject.windowRef.confirm(message);
				fireCallback();
			},openDelayValue);
		}
		else {
			userAnswer = confirm(message);
			fireCallback();
		}
		
		function fireCallback(){
			console.log("userAnswer = " + userAnswer);
			if (callbackID) asWindow.swf.confirmAnswered(windowObject.index, userAnswer);
			else asWindow.alert( -1, "Warning, SWF Embed Issue: attributes.name has not been set to the same as the flash embed div's ID, this will prevent callbacks from working");
		}
	}
	
	asWindow.print = function(index) {
		var windowObject = asWindow.getWindow(index);
		if (windowObject.windowState == 'open') {
			if (windowObject.sameAsParentDomain == false) print();
			else windowObject.windowRef.print();
		}
		else if (windowObject.windowState == 'opening') {
			var _this = this;
			setTimeout(function(){
				if (windowObject.sameAsParentDomain == false) print();
				else windowObject.windowRef.print();
			},openDelayValue);
		}
		else {
			print();
		}
	}
	
	asWindow.focus = function(index) {
		var windowObject = asWindow.getWindow(index);
		if (windowObject.windowState == 'open') {
			if (windowObject.sameAsParentDomain == false) focus();
			else windowObject.windowRef.focus();
		}
		else if (windowObject.windowState == 'opening') {
			var _this = this;
			setTimeout(function(){
				if (windowObject.sameAsParentDomain == false) focus();
				else windowObject.windowRef.focus();
			},openDelayValue);
		}
		else {
			focus();
		}
	}
	
	asWindow.blur = function(index) {
		var windowObject = asWindow.getWindow(index);
		if (windowObject.windowState == 'open') {
			if (windowObject.sameAsParentDomain == false) blur();
			else windowObject.windowRef.blur();
		}
		else if (windowObject.windowState == 'opening') {
			var _this = this;
			setTimeout(function(){
				if (windowObject.sameAsParentDomain == false) blur();
				else windowObject.windowRef.blur();
			},openDelayValue);
		}
		else {
			blur();
		}
	}
	
	
	asWindow.swf = function() {
		if (navigator.appName.indexOf("Microsoft") != -1) {
			return window[callbackID];
		} else {
			return document[callbackID];
		}
	}();
	
	
	
	
	
	
	
	
	
	
	
	
	asWindow.getURL = function(index) 
	{
		return asWindow.getWindow(index).getURL();
	}
	
	asWindow.setURL = function(index, value) 
	{
		asWindow.getWindow(index).setURL(value);
	}
	
	asWindow.getWindowState = function(index) 
	{
		return asWindow.getWindow(index).windowState;
	}
	
	asWindow.getChannelmode = function(index) 
	{
		return asWindow.getWindow(index).getChannelmode();
	}
	
	asWindow.setChannelmode = function(index, value) 
	{
		asWindow.getWindow(index).setChannelmode(value);
	}
	
	asWindow.getDirectories = function(index) 
	{
		return asWindow.getWindow(index).getDirectories();
	}
	
	asWindow.setDirectories = function(index, value) 
	{
		asWindow.getWindow(index).setDirectories(value);
	}
	
	asWindow.getFullscreen = function(index) 
	{
		return asWindow.getWindow(index).getFullscreen();
	}
	
	asWindow.setFullscreen = function(index, value) 
	{
		asWindow.getWindow(index).setFullscreen(value);
	}
	
	asWindow.getLocation = function(index) 
	{
		return asWindow.getWindow(index).getLocation();
	}
	
	asWindow.setLocation = function(index, value) 
	{
		asWindow.getWindow(index).setLocation(value);
	}
	
	asWindow.getMenubar = function(index) 
	{
		return asWindow.getWindow(index).getMenubar();
	}
	
	asWindow.setMenubar = function(index, value) 
	{
		asWindow.getWindow(index).setMenubar(value);
	}
	
	asWindow.getResizable = function(index) 
	{
		return asWindow.getWindow(index).getResizable();
	}
	
	asWindow.setResizable = function(index, value) 
	{
		asWindow.getWindow(index).setResizable(value);
	}
	
	asWindow.getScrollbars = function(index) 
	{
		return asWindow.getWindow(index).getScrollbars();
	}
	
	asWindow.setScrollbars = function(index, value) 
	{
		asWindow.getWindow(index).setScrollbars(value);
	}
	
	asWindow.getTitlebar = function(index) 
	{
		return asWindow.getWindow(index).getTitlebar();
	}
	
	asWindow.setTitlebar = function(index, value) 
	{
		asWindow.getWindow(index).setTitlebar(value);
	}
	
	asWindow.getToolbar = function(index) 
	{
		return asWindow.getWindow(index).getToolbar();
	}
	
	asWindow.setToolbar = function(index, value) 
	{
		asWindow.getWindow(index).setToolbar(value);
	}
	
	asWindow.getUseProxy = function(index) 
	{
		return asWindow.getWindow(index).getUseProxy();
	}
	
	asWindow.setUseProxy = function(index, value) 
	{
		asWindow.getWindow(index).setUseProxy(value);
	}
	
	asWindow.inject = function(index, value) 
	{
		//asWindow.getWindow(index).setUseProxy(value);
	}
	
	
	
	
	
	
	
	
	
	asWindow.getWidth = function(index) {
		var windowObject = asWindow.getWindow(index);
		return windowObject.width;
	}
	asWindow.setWidth = function(index, value) {
		var windowObject = asWindow.getWindow(index);
		windowObject.width = value;
		if (windowObject.windowRef != null) {
			if (windowObject.height == null) windowObject.height = 500;
			windowObject.windowRef.resizeTo( windowObject.width, windowObject.height );
		}
	}
	
	asWindow.getHeight = function(index) {
		var windowObject = asWindow.getWindow(index);
		return windowObject.height;
	}
	asWindow.setHeight = function(index, value) {
		var windowObject = asWindow.getWindow(index);
		windowObject.height = value;
		console.log(windowObject.windowRef);
		
		if (windowObject.windowRef != null) {
			if (windowObject.width == null) windowObject.width = 640;
			windowObject.windowRef.resizeTo( windowObject.width, windowObject.height );
		}
	}
	
	
	asWindow.getX = function(index) {
		var windowObject = asWindow.getWindow(index);
		return windowObject.x;
	}
	asWindow.setX = function(index, value) {
		var windowObject = asWindow.getWindow(index);
		windowObject.x = value;
		if (windowObject.windowRef != null) {
			if (windowObject.y == null) windowObject.y = 0;
			windowObject.windowRef.moveTo(windowObject.x,windowObject.y);
		}
	}
	
	asWindow.getY = function(index) {
		var windowObject = asWindow.getWindow(index);
		return windowObject.y;
	}
	asWindow.setY = function(index, value) {
		var windowObject = asWindow.getWindow(index);
		windowObject.y = value;
		if (windowObject.windowRef != null) {
			if (windowObject.x == null) windowObject.x = 0;
			windowObject.windowRef.moveTo(windowObject.x,windowObject.y);
		}
	}
	
	asWindow.getAlign = function(index) {
		var windowObject = asWindow.getWindow(index);
		return windowObject.align;
	}
	asWindow.setAlign = function(index, value) {
		var windowObject = asWindow.getWindow(index);
		windowObject.align = value
	}
	
	asWindow.getCallback = function(index) {
		var windowObject = asWindow.getWindow(index);
		return windowObject.callback;
	}
	asWindow.setCallback = function(index, value) {
		var windowObject = asWindow.getWindow(index);
		windowObject.callback = value
	}
	
	asWindow.windows = [];
	
	function WindowObject() {
		this.windowRef = null;
		this.windowState = 'initialized';
		this.sameAsParentDomain = false;
		this.useProxy = false;
		this.index = -1;
		
		this.width = null;
		this.height = null;
		this.x = null;
		this.y = null;
		this.align = null;
		this.callback = null;
		
		this.url = "";
		this.channelmode = "no";
		this.directories = "yes";
		this.fullscreen = "no";
		this.location = "yes";
		this.menubar = "yes";
		this.resizable = "yes";
		this.scrollbars = "yes";
		this.titlebar = "yes";
		this.toolbar = "yes";
		
		console.log('New Window Object Created');
	}
	
	WindowObject.prototype.open = function (url)
	{
		console.log('open: ' + url);
		console.log('getOptionString: ' + this.getOptionString());
		console.log("this.useProxy = " + this.useProxy);
		
		if (this.useProxy == "true"){
			console.log("use proxy");
		}
		else {
			console.log("don't use proxy");
		}
		
		if (this.getOptionString() == "") this.windowRef = window.open(url, '_blank');
		else this.windowRef = window.open(url, '_blank', this.getOptionString());
		

		this.windowState = 'opening';
		
		var _this = this;
		setTimeout(function(){
			_this.windowState = 'open';
			
			console.log(window.location);
			console.log(_this.windowRef.location);
			console.log("_this.windowRef.location.host = " + _this.windowRef.location.host);
			
			if (_this.windowRef.location.host == window.location.host && _this.windowRef.location.host != null) {
				_this.sameAsParentDomain = true;
			} else {
				_this.sameAsParentDomain = false;
			}
			console.log("_this.sameAsParentDomain = " + _this.sameAsParentDomain);
		},openDelayValue);
		
		
		
		
		
	};
	WindowObject.prototype.close = function ()
	{
		console.log('close');
		this.windowRef.close();
		this.windowState = 'closed';
	};
	
	WindowObject.prototype.getOptionString = function ()
	{
		var returnString = "";
		if (this.width != null) returnString += 'width=' + this.width + 'px,';
		if (this.height != null) returnString += 'height=' + this.height + 'px,';
		if (this.x != null) returnString += 'left=' + this.x + 'px,';
		if (this.y != null) returnString += 'top=' + this.y + 'px,';
		returnString += 'channelmode=' + this.channelmode + ',';
		returnString += 'directories=' + this.directories + ',';
		returnString += 'fullscreen=' + this.fullscreen + ',';
		returnString += 'location=' + this.location + ',';
		returnString += 'menubar=' + this.menubar + ',';
		returnString += 'resizable=' + this.resizable + ',';
		returnString += 'scrollbars=' + this.scrollbars + ',';
		returnString += 'titlebar=' + this.titlebar + ',';
		returnString += 'toolbar=' + this.toolbar + ',';
		return returnString;
	};
	
	WindowObject.prototype.getURL = function() 
	{
		return this.url;
	}
	
	WindowObject.prototype.setURL = function(value) 
	{
		this.url = value;
		this.location = this.url;
	}
	
	WindowObject.prototype.getChannelmode = function() 
	{
		return this.channelmode;
	}
	
	WindowObject.prototype.setChannelmode = function(value) 
	{
		this.channelmode = value;
	}
	
	WindowObject.prototype.getDirectories = function() 
	{
		return this.directories;
	}
	
	WindowObject.prototype.setDirectories = function(value) 
	{
		this.directories = value;
	}
	
	WindowObject.prototype.getFullscreen = function() 
	{
		return this.fullscreen;
	}
	
	WindowObject.prototype.setFullscreen = function(value) 
	{
		this.fullscreen = value;
	}
	
	WindowObject.prototype.getLocation = function() 
	{
		return this.location;
	}
	
	WindowObject.prototype.setLocation = function(value) 
	{
		this.location = value;
	}
	
	WindowObject.prototype.getMenubar = function() 
	{
		return this.menubar;
	}
	
	WindowObject.prototype.setMenubar = function(value) 
	{
		this.menubar = value;
	}
	
	WindowObject.prototype.getResizable = function() 
	{
		return this.resizable;
	}
	
	WindowObject.prototype.setResizable = function(value) 
	{
		this.resizable = value;
	}
	
	WindowObject.prototype.getScrollbars = function() 
	{
		return this.scrollbars;
	}
	
	WindowObject.prototype.setScrollbars = function(value) 
	{
		this.scrollbars = value;
	}
	
	WindowObject.prototype.getTitlebar = function() 
	{
		return this.titlebar;
	}
	
	WindowObject.prototype.setTitlebar = function(value) 
	{
		this.titlebar = value;
	}
	
	WindowObject.prototype.getToolbar = function() 
	{
		return this.toolbar;
	}
	
	WindowObject.prototype.setToolbar = function(value) 
	{
		this.toolbar = value;
	}
	
	WindowObject.prototype.setUseProxy = function() 
	{
		return this.useProxy;
	}
	
	WindowObject.prototype.setUseProxy = function(value) 
	{
		this.useProxy = value;
	}
	
	
}