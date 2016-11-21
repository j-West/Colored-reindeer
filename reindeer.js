
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

// variable to get initial size of reindeer array because the shift() method is called on the array in the for loop.
var arraySize = reindeer.length;



for (var i = 0; i < arraySize; i++) {

	//Creating a <p> element to hold the color and reindeer values
	var p = document.createElement("p");

	//Adding the shifted values to the newly created <p>element
	p.innerHTML = colors.shift() + " " + reindeer.shift();

	//Adding the <p> element to the div with ID of 'coloredReindeer'
	hohohoElement.appendChild(p);
}

