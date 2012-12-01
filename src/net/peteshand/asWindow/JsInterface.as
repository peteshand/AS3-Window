package net.peteshand.asWindow 
{
	import flash.external.ExternalInterface;
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class JsInterface 
	{
		[Embed(source="Window.js", mimeType="application/octet-stream")]
		private static const JsWindow:Class;
		private static var JsWindowString:String;
		
		public static var Injected:Boolean = false;
		
		public static function init():void
		{
			if (!Injected) {
				 Injected = true;
				 JsWindowString = new JsWindow();
				trace('ExternalInterface.objectID = ' + ExternalInterface.objectID);
				ExternalInterface.call(JsWindowString, ExternalInterface.objectID);
			}
		}
		public static function newWindow():int
		{ return int(ExternalInterface.call("asWindow.newWindow")); }
		
		public static function openWindow(index:int , url:String):void
		{ ExternalInterface.call("asWindow.openWindow", index, url); }
		
		public static function close(index:int):void
		{ ExternalInterface.call("asWindow.closeWindow", index); }
		
		public static function getHeight(index:int):int 
		{ return int(ExternalInterface.call("asWindow.getHeight", index)); }
		
		public static function setHeight(index:int, value:int):void 
		{ ExternalInterface.call("asWindow.setHeight", index, value); }
		
		public static function getWidth(index:int):int 
		{ return int(ExternalInterface.call("asWindow.getWidth", index)); }
		
		public static function setWidth(index:int, value:int):void 
		{ ExternalInterface.call("asWindow.setWidth", index, value); }
		
		public static function getX(index:int):int 
		{ return int(ExternalInterface.call("asWindow.getX", index)); }
		
		public static function setX(index:int, value:int):void 
		{ ExternalInterface.call("asWindow.setX", index, value); }
		
		public static function getY(index:int):int 
		{ return int(ExternalInterface.call("asWindow.getY", index)); }
		
		public static function setY(index:int, value:int):void 
		{ ExternalInterface.call("asWindow.setY", index, value); }
		
		public static function getAlign(index:int):String 
		{ return ExternalInterface.call("asWindow.getAlign", index); }
		
		public static function setAlign(index:int, value:String):void 
		{ ExternalInterface.call("asWindow.setAlign", index, value); }
		
		public static function getCallback(index:int):Function 
		{
			var callbackString:String = ExternalInterface.call("asWindow.getCallback", index);
			return new Function(); 
		}
		
		
		
		public static function setCallback(index:int, value:Function):void 
		{ ExternalInterface.call("asWindow.setCallback", index, value); }
		
		public static function getURL(index:int):String 
		{ return ExternalInterface.call("asWindow.getURL", index); }
		
		public static function setURL(index:int, value:String):void 
		{ ExternalInterface.call("asWindow.setURL", index, value); }
		
		public static function getChannelmode(index:int):Boolean 
		{ return JsInterface.YesNoToBoolean(ExternalInterface.call("asWindow.getChannelmode", index)); }
		
		public static function setChannelmode(index:int, value:Boolean):void 
		{ ExternalInterface.call("asWindow.setChannelmode", index, BooleanToYesNo(value)); }
		
		public static function getDirectories(index:int):Boolean 
		{ return JsInterface.YesNoToBoolean(ExternalInterface.call("asWindow.getDirectories", index)); }
		
		public static function setDirectories(index:int, value:Boolean):void 
		{ ExternalInterface.call("asWindow.setDirectories", index, BooleanToYesNo(value)); }
		
		public static function getFullscreen(index:int):Boolean 
		{ return JsInterface.YesNoToBoolean(ExternalInterface.call("asWindow.getFullscreen", index)); }
		
		public static function setFullscreen(index:int, value:Boolean):void 
		{ ExternalInterface.call("asWindow.setFullscreen", index, BooleanToYesNo(value)); }
		
		public static function getLocation(index:int):Boolean 
		{ return JsInterface.YesNoToBoolean(ExternalInterface.call("asWindow.getLocation", index)); }
		
		public static function setLocation(index:int, value:Boolean):void 
		{ ExternalInterface.call("asWindow.setLocation", index, BooleanToYesNo(value)); }
		
		public static function getMenubar(index:int):Boolean 
		{ return JsInterface.YesNoToBoolean(ExternalInterface.call("asWindow.getMenubar", index)); }
		
		public static function setMenubar(index:int, value:Boolean):void 
		{ ExternalInterface.call("asWindow.setMenubar", index, BooleanToYesNo(value)); }
		
		public static function getResizable(index:int):Boolean 
		{ return JsInterface.YesNoToBoolean(ExternalInterface.call("asWindow.getResizable", index)); }
		
		public static function setResizable(index:int, value:Boolean):void 
		{ ExternalInterface.call("asWindow.setResizable", index, BooleanToYesNo(value)); }
		
		public static function getScrollbars(index:int):Boolean 
		{ return JsInterface.YesNoToBoolean(ExternalInterface.call("asWindow.getScrollbars", index)); }
		
		public static function setScrollbars(index:int, value:Boolean):void 
		{ ExternalInterface.call("asWindow.setScrollbars", index, BooleanToYesNo(value)); }
		
		public static function getTitlebar(index:int):Boolean 
		{ return JsInterface.YesNoToBoolean(ExternalInterface.call("asWindow.getTitlebar", index)); }
		
		public static function setTitlebar(index:int, value:Boolean):void 
		{ ExternalInterface.call("asWindow.setTitlebar", index, BooleanToYesNo(value)); }
		
		public static function getToolbar(index:int):Boolean 
		{ return JsInterface.YesNoToBoolean(ExternalInterface.call("asWindow.getToolbar", index)); }
		
		public static function setToolbar(index:int, value:Boolean):void 
		{ ExternalInterface.call("asWindow.setToolbar", index, BooleanToYesNo(value)); }
		
		public static function YesNoToBoolean(value:String):Boolean 
		{
			if (value.toLowerCase() == 'yes' || value.toLowerCase() == '1') return true;
			else return false;
		}
		public static function BooleanToYesNo(value:Boolean):String 
		{
			if (value) return 'yes';
			else return 'no';
		}
	}

}