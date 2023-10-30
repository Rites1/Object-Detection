function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects"; 
}

img = "";
status = "";

function modelloaded(){
    console.log("modelloaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Dog", 45, 75);
    noFill();
    stroke("black");
    rect(30, 60, 450, 350);

    fill("red");
    text("Cat", 320, 120);
    noFill();
    stroke("black");
    rect(300, 100, 300, 350);
}