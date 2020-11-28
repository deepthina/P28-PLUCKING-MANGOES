
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var tree;
var mango1, mango2, mango3, mango4, mango5;
var stone;
var hit1;
var ground;

function preload(){
	boy=loadImage("sprites/boy.png");
  }

function setup() {

	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;


	ground = new Ground(width/2,600,width,20);
	

	mango1=new Mango(1100,390,20);
  	mango2=new Mango(1070,360,20);
	mango3=new Mango(1000,400,20);
	mango4=new Mango(910,370,20);
	mango5=new Mango(915,390,20);
	mango6=new Mango(1020,310,20);
	mango7=new Mango(1030,280,20);
	mango8=new Mango(1140,390,20);
	mango9=new Mango(1100,390,20);
	mango10=new Mango(950,390,20);
	mango11=new Mango(1120,300,20);
	mango12=new Mango(900,360,20);

	tree=new Tree(1050,400,300,300);

	stone = new Stone(235,420,30);

	hit1 = new Hit(stone.body,{x:235,y:420});


	Engine.run(engine);

}


function draw() {

	background("blue");

	textSize(20);
	text("Press Space to try again",550,100);

	image(boy ,200,340,200,300);

	ground.display();

	

	tree.display();

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
	mango12.display();

	stone.display();

	hit1.display();


	//strokeWeight(3);
	//line(boy.body.position.x-40,boy.body.position.y-30,stone.body.position.x,stone.body.position.y);



	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);
	detectCollision(stone, mango11);
	detectCollision(stone, mango12);
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {

	hit1.fly();

}

function keyPressed(){
	if(keyCode ===  32){
		hit1.attach(stone.body);
	}
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}