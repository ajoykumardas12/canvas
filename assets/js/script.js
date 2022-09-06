let canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');
ctx.moveTo(10, 20);
ctx.lineTo(200, 500);
ctx.closePath();
ctx.lineTo(700, 200);
ctx.stroke();

let canvas2 = document.getElementById('my-canvas2');
let ctx2 = canvas2.getContext('2d');
ctx2.strokeRect(50, 50, 400, 350);
ctx2.strokeRect(200, 200, 400, 350);
ctx2.fillRect(200, 200, 250, 200);
ctx2.clearRect(250, 250, 150, 100);

let canvas3 = document.getElementById('my-canvas3');
let ctx3 = canvas3.getContext('2d');
ctx3.arc(500, 200, 150, 0, 2*(Math.PI));
ctx3.fill();

let canvas4 = document.getElementById('my-canvas4');
let ctx4 = canvas3.getContext('2d');
