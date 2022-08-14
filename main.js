var x=0;
var y=0;
var draw_circle="";
var draw_rect="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="the system is listening pls speak";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;

    if(content=="Circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing a circle";
        draw_circle="set";
    }
    if(content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing a rectangle";
        draw_rect="set";
    }
}

function setup(){
canvas=createCanvas(900,600);
}

function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
       draw_circle="";
    }
    if(draw_rect=="set"){
        rect(x,y,70,20);
        document.getElementById("status").innerHTML="rectangle is drawn";
       draw_rect="";
    }
}