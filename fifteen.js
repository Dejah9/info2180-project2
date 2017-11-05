
var ttop= 0;
var tLeft= 0;

var counter = 0;

var mybackground = document.createElement("img");
mybackground.src = "background.jpg";

let blank_tile ={bt: 300, bl: 300};

var swapable = true;

window.onload = function(){
	makePuzzle();
	// shuffleMe();
	document.getElementById("puzzlearea").onclick = function(){moveMe()} ;
	 iCanMove();


};


function makePuzzle(){

	
	var minipuzzleArea = document.getElementById("puzzlearea").getElementsByTagName("div"); 
	

	var n;
	for (n = 0; n< minipuzzleArea.length; n++){
		minipuzzleArea[n].className ="puzzlepiece";
		minipuzzleArea[n].style.top = ttop+ "px";
		minipuzzleArea[n].style.left = tLeft + "px";
		

		tLeft = tLeft + 100;
		if (tLeft > 300){
			tLeft =0;
			ttop = ttop + 100;
			
		}
		minipuzzleArea[n].style.backgroundPosition = "-"+minipuzzleArea[n].style.left +" "+ "-"+minipuzzleArea[n].style.top;



	}	

}


// function shuffleMe(){

// }
 function moveMe(minipuzzleArea){
 	alert("Hello");
 	let swaapMe ={bt: blank_tile.bt, bl: blank_tile.bl};
 	blank_tile.bt= parseInt(minipuzzleArea.style.top);
 	blank_tile.bl= parseInt(minipuzzleArea.style.left);
 	minipuzzleArea.style.top = swapMe.bt + "px";
 	minipuzzleArea.style.left = swapMe.bl + "px";
 }

function iCanMove(minipuzzleArea){
	if ((parseInt(minipuzzleArea.style.top)===blank_tile.bt)&&(Math.abs(parseInt(minipuzzleArea.style.left)-blank_tile.bl)<=100)) {
		return true;
	}
	if ((parseInt(minipuzzleArea.style.left)===blank_tile.bl)&&(Math.abs(parseInt(minipuzzleArea.style.top)-blank_tile.x)<=100)) {
		return true;
	}
	return false;

 }
