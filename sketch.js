
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)

    hammer = new Hammer(100,100, 50, 40);

    rubber = new Rubber(700, 300, 30, 20);

    stone = new Stone(500, 500, 25, 25);

    iron = new Iron(300, 200, 20, 25);

    sand = new Sand(200, 400, 5, 5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  ground.display();
  rubber.display();
  stone.display();
  iron.display();
  sand.display();
}



