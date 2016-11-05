/**
 * 
 */

var colors = [];
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#resetButton");
var h1 = document.querySelector("h1");
var i = 0;
var runOnceFlag = true;
console.log(resetButton);

resetButton.addEventListener("click",function(){
	changeColor();
	currentColor = pickColor();
	console.log("Here"+currentColor)
	document.getElementById("rgbCode").innerHTML = currentColor;
	checkColor();
	runOnceFlag = false;
});

if (runOnceFlag) {
	console.log("Here");
	changeColor();
	currentColor =  pickColor();
	document.getElementById("rgbCode").innerHTML = currentColor;
	checkColor();
}



function changeColor() {
	for (var i = 0;i < 6;i++) {
		colors[i] = pickRandomColor();
		squares[i].style.background = colors[i];
	}
}

function checkColor() {
	squares.forEach( function ( square ) {
		square.addEventListener("click" , function() {
			console.log(this.style.background);
			console.log(currentColor);
			if(this.style.background ==  currentColor) {
				document.getElementById("answer").innerHTML = "Correct";
				squares.forEach( function ( square ) {
					square.style.background = currentColor;
					
				});
				h1.style.background = currentColor;
			}
			else {
				this.style.background = "#232323";
				document.getElementById("answer").innerHTML = "Wrong!";
			}
		});
	});
}



function pickColor() {
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}


function pickRandomColor() {
	var red =  Math.floor(Math.random() * 255);
	var blue =  Math.floor(Math.random() * 255);
	var green =  Math.floor(Math.random() * 255);
	return 'rgb('+red+', '+blue+', '+green+')';
}