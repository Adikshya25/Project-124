function setup() {
    video= createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(600, 450);
    canvas.position(650, 100);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    background("powderblue");
  }

  function modelLoaded(){
      console.log("PoseNet is initialised!");
  }

  function gotPoses(results){
      if(results.length > 0)
      {
          console.log(results);
      }
  }
