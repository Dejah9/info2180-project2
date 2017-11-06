
var ttop= 0;
var tLeft= 0;

var counter = 0;

var m;

var mybackground = document.createElement("img");
mybackground.src = "background.jpg";

let blank_tile ={bt: 300, bl: 300};

var swapable = true;

window.onload = function(){
	
	let minipuzzleArea = makePuzzle();
	for (n = 0; n< minipuzzleArea.length; n++){
		minipuzzleArea[n].addEventListener("click",  function(){
			if (iCanMove (minipuzzleArea[n])){
			moveMe(minipuzzleArea[n]);	
			}
		} );
	} 
}


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
	return minipuzzleArea;

}


 function moveMe(m){
 	let swaapMe ={bt: blank_tile.bt, bl: blank_tile.bl};
 	blank_tile.bt= parseInt(m.style.top);
 	blank_tile.bl= parseInt(m.style.left);
 	m.style.top = swapMe.bt + "px";
 	m.style.left = swapMe.bl + "px";
 }

function iCanMove(m){
	console.log(minipuzzleArea[n]);

	if ((parseInt(m.style.top)===blank_tile.bt)&&(Math.abs(parseInt(m.style.left)-blank_tile.bl)<=100)) {
		return true;
	}
	if ((parseInt(m.style.left)===blank_tile.bl)&&(Math.abs(parseInt(m.style.top)-blank_tile.bt)<=100)) {
		return true;
	}
	return false;

 }
