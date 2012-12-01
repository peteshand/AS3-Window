package net.peteshand.asWindow 
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
		
		public function WindowEvent(type:String, bubbles:Boolean=false, cancelable:Boolean=false) 
		{
			super(type, bubbles, cancelable);
		}
		
	}

}