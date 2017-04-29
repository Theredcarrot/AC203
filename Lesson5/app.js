var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var x = 250;
var y = 250;
var r = 25;

var mx = 2;
var my = 4;
var mr = 5;

var width = 500;
var height = 500;

function init(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	return setInterval(draw, 10)
}

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "coral";
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,width,width)
}

function circlesize(){
	if(r+mr<50){
		r += mr;
		ctx.fillStyle = "coral";
		ctx.fill();
	}
	else{ 
		r -= 40;
		ctx.fillStyle = "lightblue";
		ctx.fill();
	}
}


function draw(){
	clear();
	circlesize();
	circle(x,y,r);

	if(x+mx <0 || x+mx>width){
		mx = -mx
	}
	if(y+my <0 || y+my>width){
		my = -my
	}

	x += mx;
	y += my;
}



init();