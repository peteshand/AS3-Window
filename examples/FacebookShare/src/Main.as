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
		private var shareButton:PushButton;
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
			
			window = new FacebookWindow();
			window.width = 640;
			window.height = 220;
			window.x = 100;
			window.y = 100;
			window.addEventListener(WindowEvent.CLOSE, OnWindowClose);
			
			shareButton = new PushButton(this, 10, 10, 'Facebook Share', OnClickShare);
			closeButton = new PushButton(this, 10, 10, 'Close', OnClickClose);
			closeButton.visible = false;
		}
		
		private function OnClickShare(e:MouseEvent):void 
		{
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
				shareButton.visible = false;
				closeButton.visible = true;
			}
			else {
				shareButton.visible = true;
				closeButton.visible = false;
			}
		}
	}
}