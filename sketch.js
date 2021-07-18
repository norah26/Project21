var wall, bullet;
var speed,weight,thickness;



function setup() {
  createCanvas(1600,400)
  speed=random(150,250)
  weight=random(30,52)
  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80)
  bullet=createSprite(100,200,40,10)
  bullet.velocityX=speed
  bullet.shapeColor="yellow"
  
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

if(damage>10)
{
  wall.shapeColor="red"
}
else


wall.shapeColor="green"

}
 }
function hasCollided(lbullet,lwall)
{

  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}

