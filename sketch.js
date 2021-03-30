var car,wall;

var speed,weight;



function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);

  car.velocityX=speed;

  car.shapeColor=color(255);


  wall=createSprite(1500,200,60,200);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformatiom=0.5 * weight * speed* speed/22500;
    if(deformatiom>180)
    {
      car.shapeColor=color(255,0,0)
    }

    if(deformatiom<180 &&deformatiom>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformatiom<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}