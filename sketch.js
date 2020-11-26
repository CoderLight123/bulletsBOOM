var bullet,wall,wall1;
var speed1, weight, thickness;
var bulletRE, wallLE



function setup() {
  createCanvas(1200,400);

  speed1 = random(223,321);

  thickness = random(22,83);

  weight = random(30,52);

  bullet = createSprite(200,200,50,20);
  bullet.velocityX=speed1;

  wall1 = createSprite(1115,200,10,300);
  wall = createSprite(1115,200,thickness,300);


}

function draw() {
  background("black"); 

  drawSprites();

  bullet.collide(wall1);  

  function hasCollided(bullet, wall){

    bulletRE= bullet.x + bullet.width;
    wallLE= wall.x
    if (bulletRE>=wallLE){
      return true;
    }
      return false;
    }

if(hasCollided(bullet, wall)){
bullet.velocityX=0;

var damage=0.5*weight*speed1*speed1/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColor=color(255,0,0);
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}

}

}


