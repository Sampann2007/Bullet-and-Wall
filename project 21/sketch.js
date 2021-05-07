var speed;
var weight;
var bullet;
var wall;
var thickness;




function setup() {
  createCanvas(1600,400);
    bullet=createSprite(50,200,50,10);
    speed=random(223,321);
    weight=random(30,52);
    wall=createSprite(1200,200,thickness,100);
    thickness=random(22,83);
    bullet.velocityX=speed;
  }

function draw() {
  background("lightblue");  
    if(wall.x-bullet.x<(bullet.width+wall.width)/2){
      var deformation=0.5*weight*speed*speed/22509;
    if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage>10){
        wall.shapeColor="red";
      }
      if(damage<10){
        wall.shapeColor="green";
      }
    }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
  }
