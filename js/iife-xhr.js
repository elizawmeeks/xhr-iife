// Variable to output stuff to the dom
var write = document.getElementById("stickItHere");

// Functions to output arrays to the dom
function showCarnivores (carnivores) {
	write.innerHTML += carnivores.join(" ");
}

function showHerbivores (herbivores) {
	write.innerHTML += "<p>" + herbivores.join(" ");
}

// Calling the functions in my Predator IIFE
Predator.getCarnivores();
Predator.getHerbivores();