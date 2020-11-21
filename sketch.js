var fixedRect, movingRect
var sample1, sample2;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(200, 200, 50, 150);
  movingRect = createSprite(500, 200, 150, 50);
  sample1 = createSprite(100,500,50,50);
  sample2 = createSprite(600,500,50,50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  movingRect.velocityX = -2;
  fixedRect.velocityX = 2;
  sample1.velocityX = 2;
  sample2.velocityX = -2;

}

function draw() {
  background(0); 
  console.log(movingRect.x - fixedRect.x);
  bounce(sample1,sample2);
  if (isTouching(sample1,sample2)){
    sample1.shapeColor = "red";
    sample2.shapeColor = "red";
  }
  else{
    sample1.shapeColor = "blue";
    sample2.shapeColor = "blue";
  }
  drawSprites();
}

