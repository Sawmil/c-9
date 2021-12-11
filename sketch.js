var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(20,200,15,15);
}

function draw() 
{
  background(30);
drawSprites();
if (keyDown("right")){
  box.x=box.x + 5
}
if (keyDown("left")){
  box.x=box.x - 5
}
if (keyDown("up")){
  box.y=box.y - 5
}
if (keyDown("down")){
  box.y=box.y + 5
}
}


