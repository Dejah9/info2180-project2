
var ttop= 0;
var tLeft= 0;
var counter = 0;
var mybackground = document.createElement("img");
mybackground.src = "background.jpg";

var swapable = true;

window.onload = function(){
	makePuzzle();
	// shuffleMe();
	// moveMe();
	// iCanMove();


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
// function moveMe(){
// 	// onclick mouse 
// 	// if there is a blank space move to it

// 	//if mouse is clicked on empty square dont move. 

// 	//if mouse is clicked and has no blank square next to it, dont move. 

// }

// function iCanMove(){
// 	//check if the tile is near the blank space

// 	return swapable;
// }