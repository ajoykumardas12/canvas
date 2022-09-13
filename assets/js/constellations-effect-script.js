const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue = 0;

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

        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2){
            this.size -= 0.1;
        };
    }
    draw(){
        ctx.fillStyle = this.color;
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

        for(let j = 0; j < particlesArray.length; j++){
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < 100){
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                ctx.lineWidth = particlesArray[i].size / 10;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }

        if(particlesArray[i].size <= 0.3){
            particlesArray.splice(i, 1);
            i--;
        }

    }
}

//animate
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue+=2.5;
    requestAnimationFrame(animate);
};
animate();