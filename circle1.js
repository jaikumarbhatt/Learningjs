window.addEventListener('load',onLoadComplete );
let screenWidth;
let screenHeight;
let ctx;
let canvas;
let circleX, circleY, radiusX=100, radiusY=150;
function onLoadComplete() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    circleX = screenWidth ;
    canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
    let  nColoumn=10, nRow=5, stepValueColoumn = 1/(1+nColoumn), stepValueRow=1/(1+nRow);
    radiusX = screenWidth * stepValueColoumn * 0.50;//0.50 is dia to radius.
    radiusY = screenHeight*stepValueRow*0.5;
    for(let i=1;i<=nRow;i++){
        circleY = screenHeight*stepValueRow*(i);
        for(let j=1; j<=nColoumn; j=j+1){
            if(j>i){
                break;
            }
            drawHumanFace(circleX * stepValueColoumn * (j) , circleY, radiusX, radiusY);
        }
        // drawRow(nColoumn, stepValueColoumn);
    }
    let spellingArray = ["One", "Two", "Three", "Four", "Five" ];
    for(let i=0; i<spellingArray.length; i++){
        let text = "Spelling of "+ (i+1) + " is " + spellingArray[i] + " . "; 
        drawText(text , 650 , 100*(i+1));
    }
}
function drawRow(n, stepValue){
    for(let j=1; j<=n; j=j+1){
        drawHumanFace(circleX * stepValue * (j) , circleY, radiusX, radiusY);
    }
}
function drawEllipse(cx, cy, rx, ry, color="red"){
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, degreesToRadians(0), 0 , 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}
function degreesToRadians(degrees){
    return degrees * Math.PI / 180;
}
function drawText(text, x, y, color="red"){
    ctx.font = '30px Arial';
    ctx.fillStyle = color;
    // Write the text to the canvas
    ctx.fillText(text, x, y);   
}