var canvas;
var music;
var surface1,surface2,surface3;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
    surface1=createSprite(400,600,200,70);
    surface1.shapeColor="red";

    surface2=createSprite(700,600,200,70);
    surface2.shapeColor="green";

    surface3=createSprite(100,600,200,70);
    surface3.shapeColor="orange";


    //create box sprite and give velocity
      ball=createSprite(random(20,750),100, 40,40);
      ball.shapeColor="white";
      ball.velocityY=10;
      ball.velocityX=10;
      
     
     
      
}

function draw(){
    background(rgb(169,169,169));
    //create edgeSprite
    
  
     drawSprites();
     edges=createEdgeSprites(); 
    //add condition to check if box touching surface and make it box
     
   if(surface2.isTouching(ball)&& ball.bounceOff(surface2)){
    ball.shapeColor="green"; 
   }
       
    

    if(surface1.isTouching(ball)){
        ball.shapeColor="red";
        ball.velocityY=0;
        ball.velocityX=0;
      
        
    }
      
     
    if(edges.isTouching(ball)&& ball.bounceOff(edges)){

    }
    
    
    
    if(surface3.isTouching(ball)&& ball.bounceOff(surface3)){
        ball.shapeColor="orange"; 
    }
}
