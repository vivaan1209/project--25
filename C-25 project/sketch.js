
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
function preload()
{
	dustbinimage=loadImage("./dustbin.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
paper=new Ball()
ground=new Floor(width/2, 670, width, 20);
dustbin=new Bin(1200,650,20,400)

//bin1=new Bin(600,625,20,400)
//bin2=new Bin(670,675,160,20)


	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  paper.display()
  
  dustbin.display();

  ground.display()
 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:70, y:-130})
	}
}



