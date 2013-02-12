package net.peteshand.asWindow.utils 
{
	import net.peteshand.asWindow.Window;
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class console 
	{
		private static var window:Window = new Window();
		
		public static function log(value:String):void
		{
			window.consoleLog(value);
		}
		public static function alert(value:String):void
		{
			window.alert(value);
		}
		
	}

}