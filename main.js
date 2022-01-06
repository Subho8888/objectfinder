status="";
object=[];
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
   
}
function draw(){
    image(video,0,0,480,380);
    if(status != ""){
        r=random(255);
        g=random(255);
        b=random(255);
    
        objectDetector.detect(video,gotResults);
        for(i = 0;i < object.length;i++){
    
            document.getElementById("found_or_not").innerHTML="Status:Detected Objects";
            document.getElementById("number_of_objects").innerHTML="Number of objects detected are="+object.length;
            fill(r,g,b);
            percent=floor(object[i].confidence*100);
            text(object[i].label + ""+percent+"%",object[i].x+15,object[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("found_or_not").innerHTML="Status:Detecting Objects";
    objectName=document.getElementById("input").value;

    if (objectName==object[i].label){
    console.log(objectName+"Is Found");
    document.getElementById("found_or_not").innerHTML=objectName+"Is Detected";
    }
}
function ModelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(video,gotResults);
    }
    function gotResults(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            object=results;
        }
    }







