const TILE_SIZE = 8;
const GRID_COLS = 24;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const tileIndexDisplay = document.getElementById('tile-index');

const image = new Image();
image.src = 'assets/overworld.png';

image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(image, 0, 0);
};

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    const col = Math.floor(mouseX / TILE_SIZE);
    const row = Math.floor(mouseY / TILE_SIZE);
    const tileIndex = row * GRID_COLS + col + 1;

    tileIndexDisplay.textContent = tileIndex;
});

canvas.addEventListener('mouseleave', () => {
    tileIndexDisplay.textContent = '—';
});
