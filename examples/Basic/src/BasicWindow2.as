package 
{
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.utils.clearInterval;
	import flash.utils.setInterval;
	import net.peteshand.asWindow.events.WindowEvent;
	import net.peteshand.asWindow.Window;
	import com.bit101.components.PushButton;
	
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class BasicWindow extends Sprite 
	{
		private var main:mcMain;
		private var window:Window;
		
		private var openButton:PushButton;
		private var closeButton:PushButton;
		
		public function BasicWindow():void 
		{
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event = null):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			// entry point
			
			
			openButton = new PushButton(this, 10, 10, 'Open', OnClickOpen);
			closeButton = new PushButton(this, 10, 10, 'Close', OnClickClose);
			closeButton.visible = false;
			
			/*main = new mcMain();
			addChild(main);
			
			main.btn_openPopup.addEventListener(MouseEvent.CLICK, ClickOpenPopup);
			main.btn_htmlInjection.addEventListener(MouseEvent.CLICK, ClickHtmlInjection);
			main.btn_closeAll.addEventListener(MouseEvent.CLICK, ClickCloseAll);
			
			main.btn_setWindowPosition.addEventListener(MouseEvent.CLICK, ClickSetWindowPosition);
			main.btn_getWindowPosition.addEventListener(MouseEvent.CLICK, ClickGetWindowPosition);
			
			main.btn_setWindowDimensions.addEventListener(MouseEvent.CLICK, ClickSetWindowDimensions);
			main.btn_changeAlignment.addEventListener(MouseEvent.CLICK, ClickChangeAlignment);*/
		}
		
		private function OnClickClose(e:MouseEvent):void 
		{
			window.close();
		}
		
		private function OnClickOpen(e:MouseEvent):void 
		{
			window = new Window();
			window.width = 640;
			window.height = 350;
			window.x = 50;
			window.y = 250;
			window.open('index.html');
			window.addEventListener(WindowEvent.CLOSE, OnWindowClose);
			switchButtonVisibility();
		}
		
		private function OnWindowClose(e:WindowEvent):void 
		{
			switchButtonVisibility();
		}
		
		private function switchButtonVisibility():void
		{
			if (window.state == 'opening' || window.state == 'open') {
				openButton.visible = false;
				closeButton.visible = true;
			}
			else {
				openButton.visible = true;
				closeButton.visible = false;
			}
		}
		
		private function ClickChangeAlignment(e:MouseEvent):void 
		{
			
		}
		
		private function ClickSetWindowDimensions(e:MouseEvent):void 
		{
			/*if (currentWindow != null) {
				currentWindow.width = int(main.txt_setWidth.text);
				currentWindow.height = int(main.txt_setHeight.text);
			}*/
		}
		
		private function ClickSetWindowPosition(e:MouseEvent):void 
		{
			/*if (currentWindow != null) {
				currentWindow.x = int(main.txt_setX.text);
				currentWindow.y = int(main.txt_setY.text);
			}*/
		}
		private function ClickGetWindowPosition(e:MouseEvent):void 
		{
			
		}
		
		private function ClickOpenPopup(e:MouseEvent):void 
		{
			
			//window.consoleLog('test alert');
			
			//window.addEventListener(WindowEvent.PROMPT_ANSWERED, OnPromptAnswered);
			//window.prompt('please enter some text', 'this is the default text');
			
			//window.addEventListener(WindowEvent.CONFIRM_ANSWERED, OnConfirmAnswered);
			//window.confirm('please confirm');
			
			/*window.blur();
			
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
			}*/
		}
		
		private function OnConfirmAnswered(e:WindowEvent):void 
		{
			trace("confirm answered: " + e.value);
		}
		
		private function OnPromptAnswered(e:WindowEvent):void 
		{
			trace("prompt answered: " + e.value);
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
			//currentWindow.close();
		}
	}
}