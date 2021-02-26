const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var hero,ground,sling, block1, block2, block3;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  hero= new Hero(200,240,100);
  ground= new Ground(500,550, 1000, 10);
  sling= new Slingshot(hero.body, {x:200, y:130});
  block1= new Blocks(400,522,25,40);
  block2= new Blocks(400,482,25,40);
  block3= new Blocks(400,442,25,40);
  block4= new Blocks(400,402,25,40);
  block5= new Blocks(400,362,25,40);
  block6= new Blocks(400,322,25,40);
  block7= new Blocks(400,282,25,40);
  block8= new Blocks(400,242,25,40);
  block9 = new Blocks(450,522,25,40);
  block10 = new Blocks(450,482,25,40);
  block11 = new Blocks(450,442,25,40);
  block12 = new Blocks(450,402,25,40);
  block13 = new Blocks(450,362,25,40);
  block14 = new Blocks(450,322,25,40);
  block15= new Blocks(500,522,25,40);
  block16= new Blocks(500,482,25,40);
  block17= new Blocks(500,442,25,40);
  block18= new Blocks(500,402,25,40);
  block19= new Blocks(500,362,25,40);
  block20= new Blocks(500,322,25,40);
  block21= new Blocks(500,282,25,40);
}

function draw() {
  background(200);

  hero.display();
  ground.display();
  sling.display();
  block1.display();  block2.display(); block3.display(); block4.display(); block5.display();
  block6.display(); block7.display(); block8.display(); block9.display(); block10.display();
  block11.display(); block12.display(); block13.display(); block14.display();
  block15.display(); block16.display(); block17.display(); block18.display(); 
  block19.display(); block20.display();  block21.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}