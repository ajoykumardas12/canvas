const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

//resize canvas when window is resized
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

//mouse position
const mouse = {
    x: undefined,
    y: undefined,
};
//change mouse position on mousemove
canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

//define particle class
class Particle {
    constructor(){
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        //bounce
        //detect side walls
        if(this.x + this.size >canvas.width || this.x - this.size < 0) {
            this.speedX *= -1;
        }
        
        //detect top and bottom walls
        if(this.y + this.size >canvas.height || this.y - this.size < 0) {
            this.speedY *= -1;
        }
    }
    draw(){
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}

//initialize particle creation
function init(){
    for(let i = 0; i<100; i++){
        particlesArray.push(new Particle());
    }
}
init();

//handle particle properties
function handleParticles(){
    for(let i = 0; i < 100; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

//animate
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
};
animate();