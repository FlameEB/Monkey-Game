
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, obstacle
var score
var survivalTime = 0
var cloudGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
    ground = createSprite(400,350,900,10) 
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup(); 
  
}
  


function draw() {
  
  background("white")

if(ground.x<0){
  ground.x= ground.width/2
}

  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground)
  
  spawnObstacles();
  spawnBanana();
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0
    obstaclesGroup.setVelocityXEach(0)
    bananaGroup.setVelocityXEach(0)
    obstaclesGroup.setLifetimeEach(-1)
    bananaGroup.setLifetimeEach(-1)
  }
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50)
  
  drawSprites();
  
}
function spawnBanana() {
  //code to spawn banana
      if (frameCount % 80 === 0) {
     banana = createSprite(400,30,20,20);
    banana.y = Math.round(random(10,60));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
  banana.velocityX = -3
    
     //lifetime of banana
    banana.lifetime = 134;
    
    // depth
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    bananaGroup.add(banana);
        
}
}
function spawnObstacles() {
  //code to spawn obstacles
     if (frameCount % 80 === 0) {
    obstacle = createSprite(400,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -4
       obstacle.liftime = 100
       
     obstaclesGroup.add(obstacle);
}

}