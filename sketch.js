const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var ground;
var Ball;
var backg;
var score = 0;


//base blocks
var Base1, Base2, Base3, Base4, Base5;
var Bass1, Bass2, Bass3, Bass4, Bass5;

//middle blocks
var mid1, mid2, mid3;
var middle1, middle2, middle3;

//top blocks
var Head;
var head;

//stands
var legs1, legs2;
var slab1, slab2;

function preload(){
  GetBackgroumdimg();

backg = loadImage("Black.png")
backg = loadImage("Yellow.png")
  
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
    world = engine.world;

  //backg = loadImage("Yellow.png")

// leg day
  legs1 = new Grounds(400, 360, 15, 79);
//  legs2 = new Ground(700, 340, 15, 120);

// slabs as stands for the blocks
 slab1 = new Grounds(400, 320, 175, 10);
//  slab2 = new Ground(700, 280, 240, 10);

//base type 1
  Bass1 = new Box(335, 295, 30, 30);
  Bass2 = new Box(365, 295, 30, 30);
  Bass3 = new Box(395, 295, 30, 30);
  Bass4 = new Box(425, 295, 30, 30);
  Bass5 = new Box(455, 295, 30, 30);

// //base type 2 
//   Base1 = new Box();
//   Base2 = new Box();
//   Base3 = new Box();
//   Base4 = new Box();
//   Base5 = new Box();
   
//middle type 1
  mid1 = new Box(365,255, 30, 30);
  mid2 = new Box(395,255, 30, 30);
  mid3 = new Box(425,255, 30, 30);

// //middle type 2 
//   middle1 = new Box();
//   middle2 = new Box();
//   middle3 = new Box();


//the top
  Head = new Box(405, 235, 30, 30)
//  head = new Box()
 
 Ball = new Ballss(120, 125, 10, 10);
// Ball.body.debug = true

 //Ball.setCollider("Circle", 0, 0, 10, 10, 0);

 slingshot = new Cata(Ball.body,{x: 175, y:220})
}

function draw() {
  background(backg);

 Engine.update(engine);

//   background(0)

  // Base1.display();
  // Base2.display();
  // Base3.display();
  // Base4.display();
  // Base5.display();

  Bass1.display();
  Bass2.display();
  Bass3.display();
  Bass4.display();
  Bass5.display();

  mid1.display();
  mid2.display();
  mid3.display();

  // middle1.display();
  // middle2.display();
  // middle3.display();

  legs1.display();
 // legs2.display();

  slab1.display();
 //  slab2.display();

   Head.display();
  // head.display();
  
  Bass1.ScoreUpdates();
  Bass2.ScoreUpdates();
  Bass3.ScoreUpdates();
  Bass4.ScoreUpdates();
  Bass5.ScoreUpdates();

  mid1.ScoreUpdates();
  mid2.ScoreUpdates();
  mid3.ScoreUpdates();

  Head.ScoreUpdates()

  slingshot.display()
  ellipse(Ball.body.position.x, Ball.body.position.y, 25, 25)

  fill(220,20,60)
  text("Press Space To Reset The Ball", 150, 200)
  text("Hit The Boxes HARD To Make Them Disappear", 420, 360)
  text("Score =" + score, 10, 390)

  if(score === 1800){

    textSize(40);
    text("Level Complete", 500, 200);

  }

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(Ball.body, {x: mouseX, y: mouseY})

}

function mouseReleased(){
  slingshot.fly();

}

function keyPressed(){
  if(keyCode === 32 ){
    slingshot.attach(Ball.body);  
  }
}
async function GetBackgroumdimg(){
  var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");

  var responceJSON = await responce.json();

  var DT = responceJSON.datetime;

  var hour = DT.slice(11,13);

  if(hour>=06 && hour<=19){
    backg = (255, 211, 0)
  }else{
    backg = (0, 0, 0)}
}

