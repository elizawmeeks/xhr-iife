console.log("hihi");
// The IIFE, despite the fact that the other page is called iife-xhr.js. I found this naming I pulled from the exercise to be very confusing.
var Predator = (function(predator){
	var carnivoreArray = [];
	var herbivoreArray = [];

// This function gets the carnivore data and calls a function from the iife-xhr.js page to output it to the dom.
	predator.getCarnivores = function(callbackToInvoke){
		var meatyDataRequest = new XMLHttpRequest();
		meatyDataRequest.addEventListener("load", meatyDataRequestComplete);
		meatyDataRequest.addEventListener("error", meatyDataRequestFailed);

		function meatyDataRequestComplete(event){
			console.log("Carnivores has loaded");
			var carnivoreData = JSON.parse(event.target.responseText);
			console.log("These animals are carnivores: ", carnivoreData);
			for (var i=0; i < carnivoreData.length; i++){
				carnivoreArray.push(carnivoreData[i]);	
			}
			// console.log("carnivore array: ", carnivoreArray);
			showCarnivores(carnivoreArray);
		}

		function meatyDataRequestFailed(event){
			console.log("Oops, an error occurred while getting the data");
		}

		meatyDataRequest.open("GET", "json/carnivores.json");
		meatyDataRequest.send();

	}

// This function gets the herbivore data and calls a function from the iife-xhr.js page to output it to the dom.
	predator.getHerbivores = function(){
		var veggieDataRequest = new XMLHttpRequest();
		veggieDataRequest.addEventListener("load", veggieDataRequestComplete);
		veggieDataRequest.addEventListener("error", veggieDataRequestFailed);

		function veggieDataRequestComplete(event){
			console.log("herbivores has loaded");
			var herbivoreData = JSON.parse(event.target.responseText);
			console.log("These animals are herbivores: ", herbivoreData);
			for (var i=0; i < herbivoreData.length; i++){
				herbivoreArray.push(herbivoreData[i]);	
			}
			// console.log("herbivore array: ", herbivoreArray);
			showHerbivores(herbivoreArray);
		}

		function veggieDataRequestFailed(event){
			console.log("Oops, an error occurred while getting the data");
		}

		veggieDataRequest.open("GET", "json/herbivores.json");
		veggieDataRequest.send();

	}

	return predator;

})(Predator || {});