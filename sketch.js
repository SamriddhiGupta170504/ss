
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperobject;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paperobject=new paper(300,400,60)

	Engine.run(engine);
  
}


function draw() {
	background("yellow")
  rectMode(CENTER);
 // background(230);
 
paperobject.display();
  groundObject.display();
  dustbinObj.display();
  //keypressed()

}
function keypressed(){
    if(keycode === UP_ARROW){
        Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:120,y:-150});

        }
    }

