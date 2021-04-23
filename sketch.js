const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var polygon,slingShot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(500,300,250,10);
    //level1
    block1 = new Box(410,275);
    block2 = new Box(450,275);
    block3 = new Box(490,275);
    block4 = new Box(530,275);
    block5 = new Box(570,275);
    //level2
    block6 = new Box(430,235);
    block7 = new Box(470,235);
    block8 = new Box(510,235);
    block9 = new Box(550,235);
    //level3
    block10 = new Box(450,195);
    block11 = new Box(490,195);
    block12 = new Box(530,195);
    //leve4
    block13 = new Box(470,155);
    block14 = new Box(510,155);
    //level5
    block15 = new Box(490,115);

//pyramid 2
stand2 = new Ground(850,200,200,10);
//level 1
block16 = new Box(780,175);
block17 = new Box(820,175);
block18 = new Box(860,175);
block19 = new Box(900,175);
//level2
block20 = new Box(800,135);
block21 = new Box(840,135);
block22 = new Box(880,135);
//level3
block23 = new Box(820,95);
block24 = new Box(860,95);
//level4
block25 =new Box(840,55);


polygon = new Polygon(100,200,40,40);

slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw(){  
    background(0);
    noStroke();
    textSize(25);
    fill("YELLOW");
    text("DRAG THE POLYGON AND DESTROY THE BOXES ",100,50);
    fill("RED")
    text("PRESS SPACE TO TRY AGAIN!!",600,370)
    Engine.update(engine);
    ground.display();
    stand1.display();
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
    stand2.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    
    polygon.display();
    slingshot.display(); 
   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon.body);
    }
}   
