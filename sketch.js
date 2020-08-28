
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var redbox1, redbox2, redbox3, ground, paperBall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 680);

	paperBall = new Paper(200, 675);

	redbox1 = new Dustbin(550, 610, 20 ,100);
	redbox2 = new Dustbin(650, 650, 200, 20);
	redbox3 = new Dustbin(750, 610, 20, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperBall.display();
  redbox1.display();
  redbox2.display();
  redbox2.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:85,y:-85});
	}
}

