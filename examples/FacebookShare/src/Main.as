package 
{
	import com.bit101.components.PushButton;
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.utils.clearInterval;
	import flash.utils.setInterval;
	import net.peteshand.asWindow.events.WindowEvent;
	import net.peteshand.asWindow.social.FacebookWindow;
	import net.peteshand.asWindow.Window;
	
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class Main extends Sprite 
	{
		private var window:FacebookWindow;
		private var openButton:PushButton;
		private var closeButton:PushButton;
		
		public function Main():void 
		{
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event = null):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.NO_SCALE;
			
			openButton = new PushButton(this, 10, 10, 'Share', OnClickOpen);
			closeButton = new PushButton(this, 10, 10, 'Close', OnClickClose);
			closeButton.visible = false;
		}
		
		private function OnClickOpen(e:MouseEvent):void 
		{
			window = new FacebookWindow();
			window.width = 640;
			window.height = 220;
			window.x = 100;
			window.y = 100;
			window.addEventListener(WindowEvent.CLOSE, OnWindowClose);
			window.share("http://www.tvnz.co.nz");
			switchButtonVisibility();
		}
		
		private function OnClickClose(e:MouseEvent):void 
		{
			window.close();
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