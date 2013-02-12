package 
{
	import com.bit101.components.PushButton;
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import net.peteshand.asWindow.utils.console;
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class BasicWindow extends Sprite 
	{
		private var logButton:PushButton;
		
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
			
			logButton = new PushButton(this, 10, 10, 'console.log("test");', OnClickLog);
		}
		
		private function OnClickLog(e:MouseEvent):void 
		{
			console.log("test");
		}
	}
}