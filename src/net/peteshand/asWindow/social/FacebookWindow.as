package net.peteshand.asWindow.social 
{
	import net.peteshand.asWindow.javascript.JsInterface;
	import net.peteshand.asWindow.Window;
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class FacebookWindow extends Window 
	{
		private var facebookURL:String = 'https://www.facebook.com/sharer/sharer.php';
		
		public function FacebookWindow():void
		{
			this.width = 640;
			this.height = 220;
			super();
		}
		
		public function share(url:String):void
		{
			JsInterface.openWindow(index, facebookURL + "?u=" + url);
		}
	}
}