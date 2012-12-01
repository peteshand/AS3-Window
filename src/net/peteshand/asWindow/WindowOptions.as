package net.peteshand.asWindow 
{
	/**
	 * ...
	 * @author Pete Shand
	 */
	public class WindowOptions 
	{
		private var _channelmode:Boolean = false;
		private var _directories:Boolean = true;
		private var _fullscreen:Boolean = false;
		private var _location:Boolean = true;
		private var _menubar:Boolean = true;
		private var _resizable:Boolean = true;
		private var _scrollbars:Boolean = true;
		private var _titlebar:Boolean = true;
		private var _toolbar:Boolean = true;
		
		public function get channelmode():Boolean 
		{
			return _channelmode;
		}
		
		public function set channelmode(value:Boolean):void 
		{
			_channelmode = value;
		}
		
		public function get directories():Boolean 
		{
			return _directories;
		}
		
		public function set directories(value:Boolean):void 
		{
			_directories = value;
		}
		
		public function get fullscreen():Boolean 
		{
			return _fullscreen;
		}
		
		public function set fullscreen(value:Boolean):void 
		{
			_fullscreen = value;
		}
		
		public function get location():Boolean 
		{
			return _location;
		}
		
		public function set location(value:Boolean):void 
		{
			_location = value;
		}
		
		public function get menubar():Boolean 
		{
			return _menubar;
		}
		
		public function set menubar(value:Boolean):void 
		{
			_menubar = value;
		}
		
		public function get resizable():Boolean 
		{
			return _resizable;
		}
		
		public function set resizable(value:Boolean):void 
		{
			_resizable = value;
		}
		
		public function get scrollbars():Boolean 
		{
			return _scrollbars;
		}
		
		public function set scrollbars(value:Boolean):void 
		{
			_scrollbars = value;
		}
		
		public function get titlebar():Boolean 
		{
			return _titlebar;
		}
		
		public function set titlebar(value:Boolean):void 
		{
			_titlebar = value;
		}
		
		public function get toolbar():Boolean 
		{
			return _toolbar;
		}
		
		public function set toolbar(value:Boolean):void 
		{
			_toolbar = value;
		}
	}

}