const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    updateMatrix();
}

function updateMatrix() {
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(0);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const matrixLetters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
let columns;
let drops;

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, x) => {
        const text = matrixLetters[Math.floor(Math.random() * matrixLetters.length)];
        ctx.fillText(text, x * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[x] = 0;
        }
        drops[x]++;
    });
}

setInterval(draw, 50);
