var bg, snow, snowImg, dog, dogImg
function preload(){
  bg = loadImage("snow1.jpg");
  snowImg = loadImage("snow4.webp");
  dogImg = loadAnimation("happy dog.png","Dog.png");
}
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255); 
  image (bg, 0,0,800,400);
  spawnSnow();
  spawnDog();
  drawSprites();
}

function spawnSnow(){
  if (frameCount % 15 === 0){
    snow = createSprite(Math.round(random(10,790)), 0, 20,20);
    snow.addImage(snowImg);
    snow.velocityY = random(1,3);
    snow.scale = snow.velocityY/50;
    snow.lifetime = 400/snow.velocityY;
  }
}
function spawnDog(){
  if (frameCount % 250 === 0){
    var position = Math.round(random(250,350))
    dog = createSprite(800,position, 20,20);
    dog.addAnimation("dogMoving",dogImg);
    dog.velocityX = position/-50;
    dog.scale = position/2000;
    dog.lifetime = 400/dog.velocityX;
  }
}