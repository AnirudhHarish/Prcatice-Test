var ball
function setup() {
  createCanvas(1000,1000);
  ball=createSprite(100,100,50,50)
  ball.shapeColor="green"

  edges=createEdgeSprites()
}


function draw() 
{
  background("red");
drawSprites()
if(keyDown(UP_ARROW)){
ball.position.y=ball.position.y-5
}
if(keyDown(DOWN_ARROW)){
  ball.position.y=ball.position.y+5
}
if(keyDown(RIGHT_ARROW)){
  ball.position.x=ball.position.x+5
}
if(keyDown(LEFT_ARROW)){
  ball.position.x=ball.position.x-5
}
ball.collide(edges)
}





















