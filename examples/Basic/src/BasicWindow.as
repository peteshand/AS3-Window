package 
{
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import net.peteshand.asWindow.events.WindowEvent;
	import net.peteshand.asWindow.Window;
	import com.bit101.components.PushButton;
	
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class BasicWindow extends Sprite 
	{
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
			
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.NO_SCALE;
			
			openButton = new PushButton(this, 10, 10, 'Open', OnClickOpen);
			closeButton = new PushButton(this, 10, 10, 'Close', OnClickClose);
			closeButton.visible = false;
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
	}
}