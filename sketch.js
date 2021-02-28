const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var backgroundImg;
var ground;
var hero;
var block1,block2,block3,block5,block6,block7;
var monster;

function preload() {
backgroundImg=loadImage("Images/images/GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
  engine=Engine.create();
  world=engine.world;
  ground= new Ground(600,600,1200,20)
  hero= new Hero(400,800,250);
  rope=new Rope(hero.body,{x:500,y:50});
  block1=new Block(600,100,70,70);
  block2=new Block(600,100,70,70);
  block3=new Block(600,100,70,70);
  block4=new Block(600,100,70,70);
  block5=new Block(600,100,70,70);
  block6=new Block(600,100,70,70);
  block7=new Block(600,100,70,70);
  block8=new Block(700,100,70,70);
  block9=new Block(700,100,70,70);
  block10=new Block(700,100,70,70);
  block11=new Block(700,100,70,70);
  block12=new Block(700,100,70,70);
  block13=new Block(700,100,70,70);
  block14=new Block(700,100,70,70);
  block15=new Block(800,100,70,70);
  block16=new Block(800,100,70,70);
  block17=new Block(800,100,70,70);
  block18=new Block(800,100,70,70);
  block19=new Block(800,100,70,70);
  block20=new Block(800,100,70,70);
  block21=new Block(800,100,70,70);
  
  monster=new Monster(1100,500,300);

}

function draw() {
  background(backgroundImg);
Engine.update(engine);
ground.display();
hero.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
monster.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}
