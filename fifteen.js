//Extra Feature : Multiple Background
var ttop= 0;
var tLeft= 0;

var blank_tile ={bt: 300, bl: 300};

var swapable = true;

var pictures = ["Superman", "Wonder Woman", "Batman", "Deadpool"];

var pic_files = {"Superman" : "background.jpg", "Wonder Woman" : "wonderwoman.jpg", "Batman" : "batman.jpg", "Deadpool" : "deadpool.jpg"};

window.onload = function(){
	
	var minipuzzleArea = makePuzzle();
	var shuffle_button = document.getElementById("shufflebutton");
	var contol = document.getElementById("controls");
	var select = document.createElement("select");
	var button = document.createElement("button");
	button.innerHTML = "Change Background";
	controls.appendChild(select);
	controls.appendChild(button);
	var random_pic = pictures[Math.floor(Math.random()*pictures.length)];
	for(var n = 0; n < minipuzzleArea.length; n++){
		minipuzzleArea[n].style.backgroundImage = "url(" + pic_files[random_pic] + ")";
	}
	for(var index = 0; index < pictures.length; index++){
		var option = document.createElement("option");
		option.text = pictures[index];
		select.add(option);

	}
	for (var n = 0; n< minipuzzleArea.length; n++){
		minipuzzleArea[n].addEventListener("click",  function(){
			if (iCanMove(this)){
				moveMe(this);	
			}
		});
		minipuzzleArea[n].addEventListener("mouseover", function(){
			if(iCanMove(this)){
				this.setAttribute("class", "puzzlepiece movablepiece");
			}else{
				this.setAttribute("class", "puzzlepiece");
			}
		});
	}
	shufflebutton.addEventListener("click",function(){
		for(var count = 0; count < 100; count++ ){
			//Shuffle here
			var list = [] //list of all the moveable pieces at anytime
			for(var n = 0; n < minipuzzleArea.length; n++){
				if(iCanMove(minipuzzleArea[n])){
					var found = list.indexOf(minipuzzleArea[n]); //searches the list for the tile
					if(found === -1){
						list.push(minipuzzleArea[n]); //If tile is not found, add it to the list since it is moveable
					}
				}else{
					var found = list.indexOf(minipuzzleArea[n]);
					if(found > -1){
						list.splice(found,1); //if file is found, remove it from the list since it is not moveable
					}
				}
			}
			var random_num = Math.floor(Math.random()*list.length);
			moveMe(list[random_num]);
		}
	});
	button.addEventListener("click",function(){
		var chosen_pic = select.options[select.selectedIndex].text;
		for(var n = 0; n < minipuzzleArea.length; n++){
			minipuzzleArea[n].style.backgroundImage = "url(" + pic_files[chosen_pic] + ")";
		}
	});
}


function makePuzzle(){
	var minipuzzleArea = document.getElementById("puzzlearea").getElementsByTagName("div"); 
	for ( var n = 0; n< minipuzzleArea.length; n++){
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
 	var swapMe ={bt: blank_tile.bt, bl: blank_tile.bl};
 	blank_tile.bt= parseInt(m.style.top);
 	blank_tile.bl= parseInt(m.style.left);
 	m.style.top = swapMe.bt + "px";
 	m.style.left = swapMe.bl + "px";
 }

function iCanMove(m){
	if ((parseInt(m.style.top)===blank_tile.bt)&&(Math.abs(parseInt(m.style.left)-blank_tile.bl)<=100)) {
		return true;
	}
	if ((parseInt(m.style.left)===blank_tile.bl)&&(Math.abs(parseInt(m.style.top)-blank_tile.bt)<=100)) {
		return true;
	}
	return false;

}
