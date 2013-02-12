package 
{
	import com.bit101.components.PushButton;
	import com.bit101.components.Text;
	
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import net.peteshand.asWindow.events.WindowEvent;
	import net.peteshand.asWindow.Window;
	
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class Main extends Sprite 
	{
		private var window:Window;
		private var openButton:PushButton;
		private var promptButton:PushButton;
		private var confirmButton:PushButton;
		private var logButton:PushButton;
		private var resultText:Text;
		
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
			
			window = new Window();
			window.addEventListener(WindowEvent.PROMPT_ANSWERED, OnPromptAnswer);
			window.addEventListener(WindowEvent.CONFIRM_ANSWERED, OnConfirmAnswer);
			
			openButton = new PushButton(this, 10, 10, 'Open Alert', OnClickOpen);
			promptButton = new PushButton(this, openButton.x + openButton.width + 10, 10, 'Open Prompt', OnClickPrompt);
			confirmButton = new PushButton(this, promptButton.x + promptButton.width + 10, 10, 'Open Confirm', OnClickConfirm);
			logButton = new PushButton(this, confirmButton.x + confirmButton.width + 10, 10, 'console.log', OnClickLog);
		
			resultText = new Text(this, promptButton.x, 40, "");
			resultText.height = 20;
			resultText.width = promptButton.width + confirmButton.width + 10;
		}
		
		private function OnClickOpen(e:MouseEvent):void 
		{
			window.alert("test alert");
		}
		
		private function OnClickPrompt(e:MouseEvent):void 
		{
			window.prompt("test prompt", "default answer");
		}
		
		private function OnClickConfirm(e:MouseEvent):void 
		{
			window.confirm("test confirm");
		}
		
		private function OnClickLog(e:MouseEvent):void 
		{
			window.consoleLog("test log");
		}
		
		private function OnPromptAnswer(e:WindowEvent):void 
		{
			resultText.text = "prompt answer: " + e.value;
		}
		
		private function OnConfirmAnswer(e:WindowEvent):void 
		{
			resultText.text = "prompt answer: " + e.value;
		}
	}
	
}