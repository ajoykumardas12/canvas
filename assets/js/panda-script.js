let canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');

function strokeArc(lineWidth, color, x, y, r, startAngle, endAngle){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.arc(x, y, r, startAngle, endAngle);
    ctx.stroke();
}
function fillArc(color, x, y, r, startAngle, endAngle) {
    ctx.beginPath();
    ctx.arc(x, y, r, startAngle, endAngle);
    ctx.fillStyle = color;
    ctx.fill();
};

const pi = Math.PI;

strokeArc(10, '#000', 500, 250, 200, 0, 2*pi)

fillArc('#000', 400, 200, 50, 0, 2*pi)
fillArc('#fff', 400, 200, 30, 0, 2*pi);
fillArc('#000', 403, 200, 20, 0, 2*pi);

fillArc('#000', 600, 200, 50, 0, 2*pi)
fillArc('#fff', 600, 200, 30, 0, 2*pi);
fillArc('#000', 597, 200, 20, 0, 2*pi);

fillArc('#000' , 500, 250, 30, 0, 2*pi);

strokeArc(10, '#000', 500, 250, 120, 0.2*pi, pi- 0.2*pi);

fillArc('#000' , 640, 110, 45, 1.25*pi, .25*pi);
fillArc('#000' , 360, 110, 45, .75*pi, 1.75*pi);

