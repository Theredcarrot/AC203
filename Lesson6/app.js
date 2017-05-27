var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var x = 250;
var y = 250;
var size = 50;

var mx = 0;
var my = 0;

var WIDTH = 500;
var HEIGHT = 500;

var gameover = false;

var circleX;
var circleY;

function drawPacman(x,y,size){
	var pacman = new Image();
	pacman.src = "player.png";
	ctx.drawImage(pacman,x,y,size,size)
}

function drawCircle(x,y,size){
	var circle = new Image();
	circle.src = "star.png";
	ctx.drawImage(circle,circleX,circleY,40,40)
}

function init(){

	circleX = Math.floor(Math.random()*(WIDTH-60));
	circleY = Math.floor(Math.random()*(HEIGHT-60));

	window.onkeydown = keydownControl;

	return setInterval(draw,10);
}

function keydownControl(e){
	if(e.keyCode == 37){
		mx = -4;
		my = 0;
	} else if(e.keyCode == 38){
		mx = 0;
		my = -4;
	} else if(e.keyCode == 39){
		mx = 4;
		my = 0;
	} else if(e.keyCode == 40){
		mx = 0;
		my = 4;
	}
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function draw(){
	clear();

	if(gameover != true){
		drawPacman(x,y,size);
		drawCircle();

		if(x+mx>WIDTH-25 ||  x+mx <-25){
			mx = -mx;
		}
		if(y+my>WIDTH-25 ||  y+my <-25){
			my = -my;
		}

		x += mx;
		y += my;
	}
}

init();




























