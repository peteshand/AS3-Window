package 
{
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.utils.clearInterval;
	import flash.utils.setInterval;
	import net.peteshand.asWindow.Window;
	import net.peteshand.asWindow.WindowEvent;
	
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class Main extends Sprite 
	{
		private var main:mcMain;
		private var currentWindow:Window;
		
		public function Main():void 
		{
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event = null):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			// entry point
			
			
			main = new mcMain();
			addChild(main);
			
			main.btn_openPopup.addEventListener(MouseEvent.CLICK, ClickOpenPopup);
			main.btn_htmlInjection.addEventListener(MouseEvent.CLICK, ClickHtmlInjection);
			main.btn_closeAll.addEventListener(MouseEvent.CLICK, ClickCloseAll);
			
			main.btn_setWindowPosition.addEventListener(MouseEvent.CLICK, ClickSetWindowPosition);
			main.btn_getWindowPosition.addEventListener(MouseEvent.CLICK, ClickGetWindowPosition);
			
			main.btn_setWindowDimensions.addEventListener(MouseEvent.CLICK, ClickSetWindowDimensions);
			main.btn_changeAlignment.addEventListener(MouseEvent.CLICK, ClickChangeAlignment);
		}
		
		private function ClickChangeAlignment(e:MouseEvent):void 
		{
			
		}
		
		private function ClickSetWindowDimensions(e:MouseEvent):void 
		{
			if (currentWindow != null) {
				currentWindow.width = int(main.txt_setWidth.text);
				currentWindow.height = int(main.txt_setHeight.text);
			}
		}
		
		private function ClickSetWindowPosition(e:MouseEvent):void 
		{
			if (currentWindow != null) {
				currentWindow.x = int(main.txt_setX.text);
				currentWindow.y = int(main.txt_setY.text);
			}
		}
		private function ClickGetWindowPosition(e:MouseEvent):void 
		{
			
		}
		
		private function ClickOpenPopup(e:MouseEvent):void 
		{
			trace("ClickOpenPopup");
			var window:Window = new Window();
			window.width = 840;
			window.height = 560;
			window.open('index.html');
			currentWindow = window;
			
			//var delay:uint = setInterval(Delay, 2000);
			var locX:int = 100;
			
			function Delay():void 
			{
				//clearInterval(delay);
				
				window.width = 640;
				window.height = 360;
				window.x = locX;
				locX += 50;
				window.y = 100;
				window.url = 'index.html';
			}
		}
		
		private function ClickHtmlInjection(e:MouseEvent):void 
		{
			
		}
		private function OnMove(e:WindowEvent):void 
		{
			
		}
		private function OnResize(e:WindowEvent):void 
		{
			
		}
		private function OnClose(e:WindowEvent):void 
		{
			
		}
		private function ClickCloseAll(e:MouseEvent):void 
		{
			currentWindow.close();
		}
	}
}