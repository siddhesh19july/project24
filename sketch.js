
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,Papper;



function setup() {
	createCanvas(800, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
dustbin = new Dustbin(720,390,100,10);
papper= new Papper(100,300,10);
ground = Bodies.rectangle(width/2,400,width,10),{
	isStatic=true,
    Worldadd(world,ground)
}

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  papper.display();
  
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){


    Matter.body.applyForce(papperObeject.body,papperObeject.position,{x:85,y:-85});
  }
}

