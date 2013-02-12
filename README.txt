AS3 Window is a small library designed to simplify communication between Actionscript and the browser Window Object.

Example 1:
import net.peteshand.asWindow.Window;

var window:Window = new Window();
window.width = 840;
window.height = 560;
window.x = 100;
window.y = 100;
window.open('popup.html');

Example 2:
import net.peteshand.asWindow.utils.console;

console.log("trace to browser console");