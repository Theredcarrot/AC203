console.log("Glad you found me!")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "coral";
ctx.moveTo(150,0);
ctx.lineTo(300,150);
ctx.lineTo(150,300);
ctx.lineTo(0,150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "coral";
ctx.fill();


var c2 = document.getElementById("yourCanvas");
var ctx2 = c2.getContext("2d");

ctx2.beginPath();
ctx2.strokeStyle = "coral";
ctx2.moveTo(0,0);
ctx2.lineTo(0,300);
ctx2.lineTo(300,0);
ctx2.lineTo(300,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "coral";
ctx2.fill();

var c3 = document.getElementById("theirCanvas");
var ctx3 = c3.getContext("2d");

ctx3.beginPath();
ctx3.strokeStyle = "coral";
ctx3.moveTo(150,150);
ctx3.lineTo(150,0);
ctx3.lineTo(300,0);

ctx3.lineTo(150,150);
ctx3.lineTo(150,300);
ctx3.lineTo(0,300);

ctx3.lineTo(150,150);
ctx3.lineTo(300,150);
ctx3.lineTo(300,300);

ctx3.lineTo(150,150);
ctx3.lineTo(0,150);
ctx3.lineTo(0,0);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "coral";
ctx3.fill();

var c4 = document.getElementById("hisCanvas");
var ctx4 = c4.getContext("2d");

ctx4.beginPath();
ctx4.arc(150,150,50,0,6.28)
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "coral";
ctx4.fill();

var c5 = document.getElementById("herCanvas");
var ctx5 = c5.getContext("2d");

ctx5.beginPath();
ctx5.arc(150,150,90,0,6.28)
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "purple";
ctx5.fill();

ctx5.beginPath();
ctx5.arc(150,150,80,0,6.28)
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "indigo";
ctx5.fill();

ctx5.beginPath();
ctx5.arc(150,150,70,0,6.28)
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "blue";
ctx5.fill();

ctx5.beginPath();
ctx5.arc(150,150,60,0,6.28)
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "green";
ctx5.fill();

ctx5.beginPath();
ctx5.arc(150,150,50,0,6.28)
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "yellow";
ctx5.fill();

ctx5.beginPath();
ctx5.arc(150,150,40,0,6.28)
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "orange";
ctx5.fill();

ctx5.beginPath();
ctx5.arc(150,150,30,0,6.28)
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "red";
ctx5.fill();

var c6 = document.getElementById("itsCanvas");
var ctx6 = c6.getContext("2d");


ctx6.beginPath();
ctx6.moveTo(150,80);
ctx6.lineTo(200,80);
ctx6.lineTo(200,150);
ctx6.lineTo(180,150);
ctx6.lineTo(180,100);
ctx6.lineTo(170,100);
ctx6.lineTo(170,300);
ctx6.lineTo(160,300);
ctx6.lineTo(160,200);
ctx6.lineTo(140,200);
ctx6.lineTo(140,300);
ctx6.lineTo(130,300);
ctx6.lineTo(130,100);
ctx6.lineTo(120,100);
ctx6.lineTo(120,150);
ctx6.lineTo(100,150);
ctx6.lineTo(100,80);
ctx6.lineTo(150,80);

ctx6.closePath();
ctx6.stroke();
ctx6.fillStyle = "DarkTurquoise ";
ctx6.fill();

ctx6.beginPath();
ctx6.arc(150,50,30,0,6.28)
ctx6.closePath();
ctx6.stroke();
ctx6.fillStyle = "DarkTurquoise";
ctx6.fill();



