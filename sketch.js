var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
function preload(){
music = loadSound("music.mp3");
}

function setup(){
canvas = createCanvas(800,600);

surface1 = createSprite(120,590,120,20);
surface1.shapeColor = "blue";

surface2 = createSprite(320,590,120,20);
surface2.shapeColor = "maroon";

surface3 = createSprite(520,590,120,20);
surface3.shapeColor = "green";

surface4 = createSprite(720,590,120,20);
surface4.shapeColor = "orange";

box = createSprite(400,200,30,30);
box.shapeColor = "white";
box.velocityX = 4;
box.velocityY = 4;

}

function draw() {
    background("pink");    

edges = createEdgeSprites();
box.bounceOff(edges);    

if(surface1.isTouching(box) && box.bounceOff(surface1)){
box.shapeColor =  "blue";
music.play();
}

if(surface2.isTouching(box)){
box.shapeColor = "maroon";
music.play();
}

if(surface3.isTouching(box) && box.bounceOff(surface3)){
box.shapeColor = "green";
box.velocityX = 0;
box.velocityY = 0;
music.stop();
}

if(surface4.isTouching(box) && box.bounceOff(surface4)){
box.shapeColor = "orange";
music.play();
}

drawSprites();  
 }   


