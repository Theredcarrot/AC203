var panda = new Image();
panda.src = "panda.png";

panda.onload = function(){
	ctx.drawImage(panda,0,0,300,300);
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



var bird = new Image();
bird.src = "bird.png";

bird.onload = function(){
	ctx2.drawImage(bird,0,0,300,300);
}

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");



var spongebob = new Image();
spongebob.src = "spongebob.png";

spongebob.onload = function(){
	ctx3.drawImage(spongebob,0,0,300,300);
}

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");