package net.peteshand.asWindow.events 
{
	import flash.events.Event;
	
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class WindowEvent extends Event 
	{
		public static const MOVE:String = 'move';
		public static const RESIZE:String = 'resize';
		public static const CLOSE:String = 'close';
		public static const PROMPT_ANSWERED:String = 'prompt_anwered';
		public static const CONFIRM_ANSWERED:String = 'confirm_anwered';
		
		public var value:String = "";
		public var index:int = -1;
		
		public function WindowEvent(type:String, bubbles:Boolean=false, cancelable:Boolean=false) 
		{
			super(type, bubbles, cancelable);
		}
		
	}

}