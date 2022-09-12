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

//click
canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;

    //create particles on click
    for(let i = 0; i < 10; i++){
        particlesArray.push(new Particle());
    }
});

//mousemove
canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;

    //create particles on move
    for(let i = 0; i < 2; i++){
        particlesArray.push(new Particle());
    }
});

//define particle class
class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height

        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2){
            this.size -= 0.1;
        };
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}


//handle particle properties
function handleParticles(){
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();

        if(particlesArray[i].size <= 0.3){
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

//animate
function animate(){
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
};
animate();