/* Code for our Brick-based app */

document.addEventListener('DOMComponentsLoaded', function(){
  // Run any code here that depends on Brick components being loaded first
  // Very similar to jQuery's document.ready()

 	var toggleButton = document.getElementById("flip"),
 		flipBox = document.getElementById("flipbox");

	toggleButton.addEventListener("click", function(){
		flipBox.toggle(); 
	});
});

