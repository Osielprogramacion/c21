
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.

    var ball;
	Engine.run(engine);
    var ball options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}
	groundObj.display();
	groundobj=new ground(width/2,670,width,20);
    leftSide = new ground(1100,600,20,126);

	Matter.Bodies.circle(x, y, radius, [options], [maxSides]) → ball
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, 20, 1.5)
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



