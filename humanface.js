function drawHumanFace(cX, cY, frameWidth, frameHeight){
    let faceWidth = frameWidth*0.8;
    let faceHeight = frameHeight*0.7;
    drawEllipse(cX, cY, faceWidth*0.5, faceHeight*0.5);//face
    drawEllipse(cX, cY+faceHeight*0.05, faceWidth*0.08, faceHeight*0.12);//nose
    drawEllipse(cX-faceWidth*0.18, cY-faceHeight*0.15, faceWidth*0.1, faceHeight*0.08);//left eye
    drawEllipse(cX+faceWidth*0.18, cY-faceHeight*0.15, faceWidth*0.1, faceHeight*0.08);//right eye
    drawEllipse(cX, cY+faceHeight*0.05+faceHeight*0.12*0.5*4, faceWidth*0.15, faceHeight*0.03);//mouth
    drawEllipse(cX-faceWidth*0.18-faceWidth*0.37, cY-faceHeight*0.15+faceHeight*0.1, faceWidth*0.05, faceHeight*0.18);//left ear
    drawEllipse(cX+faceWidth*0.18+faceWidth*0.37, cY-faceHeight*0.15+faceHeight*0.1, faceWidth*0.05, faceHeight*0.18);//right ear
    drawEllipse(cX, cY-faceHeight*0.50, faceWidth*0.4, faceHeight*0.10);//hair
}
