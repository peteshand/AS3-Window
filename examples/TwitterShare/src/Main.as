package 
{
	import com.bit101.components.PushButton;
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import net.peteshand.asWindow.social.TwitterWindow;
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class Main extends Sprite 
	{
		private var twitterWindow:TwitterWindow;
		private var shareButton:PushButton;
		
		public function Main():void 
		{
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event = null):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			// entry point
			
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.NO_SCALE;
			
			twitterWindow = new TwitterWindow();
			twitterWindow.width = 640;
			twitterWindow.height = 260;
			twitterWindow.x = 100;
			twitterWindow.y = 100;
			
			shareButton = new PushButton(this, 10, 10, 'TwitterShare', OnClickShare);
		}
		
		private function OnClickShare(e:MouseEvent):void 
		{
			twitterWindow.share("this is a test http://google.com #hasttag");
		}
	}
}