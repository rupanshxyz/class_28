const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var backgroundImg;
var ground;
var cannon;

function preload() {
  backgroundImg = loadImage("../C27-Ta-v4--main/assets/background.gif");
}

function setup() {
  createCanvas(1000, 600);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(120, 350, 200, 300);
  ground = new Ground(20, 680, 400, 20);
  cannon = new Cannon(180, 100, 110, 50,-PI/4);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  tower.display();
  ground.display();
  cannon.display();
}
