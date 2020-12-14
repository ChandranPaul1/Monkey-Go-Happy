var monkey , monkey_running;
var ground;
var bananaImage, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
 monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
 bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(400,400);  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("monkey",monkey_running);
 monkey.scale = 0.1; 
  
 ground = createSprite(400,350,900,10) 
 ground.velocityX = -4; 
  
 FoodGroup = createGroup(); 
 obstacleGroup = createGroup(); 
    
 console.log(ground.x);
  
}

function draw() {
background("lightblue");
  
 if (ground.x < 0) { 
  ground.x = ground.width/2; 
    
 } 
  
 if (keyDown("space")) {
  monkey.velocityY = -12;
 
 }  
   
 monkey.velocityY = monkey.velocityY + 0.8;     
 monkey.collide(ground);  
  
 obstacles(); 
  
 food(); 
  
 drawSprites();
  
}

function food() {

 if (frameCount % 80 === 0) {
  var banana = createSprite(450,200);
  banana.addImage(bananaImage);
  banana.velocityX = -4; 
  banana.y = Math.round(random(120,200));
  banana.scale = 0.1;
  banana.lifetime = 300; 
  FoodGroup.add(banana);
   
 } 
  
}

function obstacles() {

 if (frameCount % 300 === 0) {
  var obstacle = createSprite(400,200,10,40);
  obstacle.addImage(obstacleImage); 
  obstacle.velocityX = -6;
  obstacle.scale = 0.5;
  obstacle.lifetime = 300;
  obstacleGroup.add(obstacle); 
      
 }

}
