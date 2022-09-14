const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//resize canvas when window is resized
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let number = 0;
let scale = 10;

function drawFlower(){
    let angle = number * 1;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;

    ctx.fillStyle = 'orangered';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 18, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    number++;
}

//animate
function animate(){
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFlower();
    //stop drawing after 300 loops
    if(number > 300) return;

    requestAnimationFrame(animate);
};
animate();