
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200,100,400,10);

	bob1 = new Bob(30,300,15);
	bob2 = new Bob(90,300,15);
	bob3 = new Bob(150,300,15);
	bob4 = new Bob(210,300,15);
	bob5 = new Bob(270,300,15);

	rope1 = new Rope(bob1.body,roof.body,0,0);
	rope2 = new Rope(bob2.body,roof.body,30,0);
	rope3 = new Rope(bob3.body,roof.body,60,0);
	rope4 = new Rope(bob4.body,roof.body,90,0);
	rope5 = new Rope(bob5.body,roof.body,120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75,y:75}); 
	 }
   }



