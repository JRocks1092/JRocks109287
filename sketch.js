
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, stone, chain1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,150,35);
	mango3=new mango(1000,70,20);
	mango4=new mango(1200,125,30);
	mango5=new mango(900,200,40);
	mango6=new mango(1000,160,30);
	mango7=new mango(1050,220,35);
	mango8=new mango(1100,250,32);
	mango9=new mango(950,240,35);
	mango10=new mango(1225,225,41);
	mango11=new mango(1150,245,20);

	stone = new Stone(240, 413 ,30);

	chain1 = new Chain(stone.body, stone.body.position.x, stone.body.position.y)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  chain1.display();

  stone.display();

  groundObject.display();

  resetPosition();

  MangoFall(stone, mango1);
  MangoFall(stone, mango2);
  MangoFall(stone, mango3);
  MangoFall(stone, mango4);
  MangoFall(stone, mango5);
  MangoFall(stone, mango6);
  MangoFall(stone, mango7);
  MangoFall(stone, mango8);
  MangoFall(stone, mango9);
  MangoFall(stone, mango10);
  MangoFall(stone, mango11);

  textSize(30);

  text("Press space to try again.",30, 60)

}

function mouseDragged(){
Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
	
	chain1.fly();

}

function MangoFall(body1, body2){


	pos1 = body1.body.position;
	pos2 = body2.body.position;

	var distance = dist(pos1.x, pos1.y, pos2.x, pos2.y);

	if(distance<body2.r+body1.r){

		Matter.Body.setStatic(body2.body, false);

	}

}

function resetPosition(){

	if(keyDown("space")){

		Matter.Body.setPosition(stone.body, {x:240 , y:413});
		chain1.throw();
		
	}

}

