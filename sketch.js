const Engine=Matter.Engine 

const World= Matter.World 

const Bodies= Matter.Bodies 

var engine, world, ground; 
var ball;

function setup() { 
  createCanvas(800,400); 
  
  engine=Engine.create(); 
 
  world= engine.world; 

  ball= bodies.circle;
  ball

  
  //var options={ isStatic: true} 
  
  
  ground= Bodies.rectangle(400,200,50,50, options) 
  
  World.add(world, ground) 
} 
  

function draw() { 
    background(255,255,255); 
    Engine.update(engine); 
    rectMode(CENTER) 
    rect (ground.position.x, ground.position.y, 50,50);
   }
