const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const colors=["blue", "green",
"pink"];
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    rectMode(CENTER);

    
    drawSquares(150, 150, 200, "#db5461", "#102e4a", "#db5461");
    drawSquares(600, 150, 100, "#102e4a", "#8093f1", "#db5461");
    drawSquares(100, 400, 100, "#8093f1", "#7fb285", "#db5461");
    drawSquares(850, 375, 300, "#7fb285", "#0bc9cd", "#102e4a");
    drawSquares(450, 400, 50, "#0bc9cd", "#db5461", "#8093f1");

    drawGrid(canvasWidth, canvasHeight);
}


function drawSquares(x, y, size, color1, color2, color3) {
    console.log(x, y, size, color1, color2, color3);
    fill("red");
    square(200, 200, 200);
    fill("pink");
    square(200, 200, 200 * (2 / 3));
    fill("white");
    square(200, 200, 200 * (1 / 3));
}
