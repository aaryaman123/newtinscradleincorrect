
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

var options = {
		isStatic : true
	}

	//Create the Bodies Here.
	bob1 = new Bob(200,600,20);
	bob2 = new Bob(240,600,20);
	bob3 = new Bob(280,600,20);
	bob4 = new Bob(320,600,20);
	bob5 = new Bob(360,600,20);

	roof = Bodies.rectangle(255,450,400,20,options);
	World.add(world, roof);

	rope1 = new Rope(bob3.body,this.roof,0,0);

	Engine.run(engine);
	console.log(roof);
}


function draw() {  
  background(250);
  
  rectMode(CENTER);
  rect(roof.position.x, roof.position.y,400,20);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
}