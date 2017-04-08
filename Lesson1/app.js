var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


//start point
ctx.moveTo(0,0);
//end point
ctx.lineTo(200,100);
//draw
ctx.stroke();


//color of rectangle
ctx.fillStyle= "rgb(0,50,100)";
//draw rectangle
ctx.fillRect(150,150,50,50);


//color of border
ctx.strokeStyle= "rgb(200,0,0)";
//border
ctx.strokeRect(100,200,50,50);

ctx.clearRect(150,150,40,40);

var c = document.getElementById("yourCanvas");
var ctx = c.getContext("2d");


//color of rectangle
ctx.fillStyle= "rgb(0,100,0)";
//draw rectangle
ctx.fillRect(0,0,200,200);
//color of rectangle

ctx.fillStyle= "rgb(0,100,0)";
//draw rectangle
ctx.fillRect(200,200,200,200);


var c = document.getElementById("draftCanvas");
var ctx2 = c.getContext("2d");

var x = 0
var y = 0
var width = 300;
var height = 300;
ctx2.fillRect(x,y,width,height);

while(width>0){
	x+=10;
	y+=10;
	width -= 20;
	height -= 20;
	ctx2.clearRect(x,y,width,height);
	x+=10;
	y+=10;
	width -= 20;
	height -= 20;
	ctx2.fillRect(x,y,width,height);
}





























