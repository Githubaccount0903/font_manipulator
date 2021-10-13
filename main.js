function setup() {
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
   backgroud('#65FFF1')
}
function modelLoaded() {
    console.log("your model is loaded")
}
function gotPoses() {
    if (results.length > 0){
    console.log(results)
    }
}