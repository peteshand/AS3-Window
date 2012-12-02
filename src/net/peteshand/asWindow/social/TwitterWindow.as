package net.peteshand.asWindow.social 
{
	import net.peteshand.asWindow.javascript.JsInterface;
	import net.peteshand.asWindow.Window;
	
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class TwitterWindow extends Window 
	{
		private var twitterURL:String = 'http://twitter.com/intent/tweet';
		
		public function TwitterWindow():void
		{
			this.width = 640;
			this.height = 220;
			super();
		}
		
		public function share(msg:String):void
		{
			JsInterface.openWindow(index, twitterURL + "?status=" + encodeURIComponent(msg));
		}
	}
}