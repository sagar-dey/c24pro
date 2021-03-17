
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, hammer,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	hammer=  new Hammer(200,200)
	stone=   new Stone(700,240,70,70)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
  drawSprites();
 ground.display();
 hammer.display();
 stone.display();

}



