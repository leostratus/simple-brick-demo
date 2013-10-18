/* Code for our Brick-based app */

document.addEventListener('DOMComponentsLoaded', function(){
	// Run any code here that depends on Brick components being loaded first
	// Very similar to jQuery's document.ready()


	// x-deck

	var deck = document.getElementById("deck");
	var nextButton = document.getElementById("view-next");
	var prevButton = document.getElementById("view-prev");

	prevButton.addEventListener("click", function(){
	    deck.shufflePrev();
	});

	nextButton.addEventListener("click", function(){
	    deck.shuffleNext();
	});

});

