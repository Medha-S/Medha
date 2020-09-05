const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite;
var packageBody, packageSprite, packageIMG;
var ground;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(400,490,200,20, {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}
	
function draw()
 {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  fill("grey");
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;
  rect(ground.position.x,ground.position.y,800,40); 
  drawSprites();
  keyPressed();
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW)
  {
	Matter.Body.setStatic(packageBody, false);
  }
}