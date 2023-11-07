objects = [];

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
        objects = results;
    }
}

function preload(){
    img = loadImage("elephant.jpeg");
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for(i = 0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
    fill("red");
    percent = floor(objects[i].confidence * 100);

    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke("red");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}