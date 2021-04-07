const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3;
var bird;
function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

    // Floor 1
    box1 = new Box(920,300,70,70);
    box2 = new Box(1100,300,70,70);
    pig1 = new Pig(1000,300,70,70);
    log1 = new Log(1000,280,280,20,PI);
 
    // Floor 2
    box3 = new Box(920,260,70,70);
    box4 = new Box(1100,260,70,70);
    pig2 = new Pig(1000,260,70,70);
    log2 = new Log(1000,230,280,20,PI);
    

    // Floor 3
    box5 = new Box(1000,200,70,70);
    log3 = new Log(985,180,150,20,-PI/4);
    log4 = new Log(1010,180,150,20,PI/4);

    //Bird
    bird= new Bird(200,300,70,70);
    ground = new Ground(800,height,2000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    ground.display();
    bird.display();
}