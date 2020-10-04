var PLAY=1;
var END=0;


var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var invisibleGround,ground;

function preload(){
 
 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 
  obstacleImage=loadImage("obstacle.png");
 
  bananaImage = loadImage("banana.png");
}



function setup() {

  survivalTime=0;
  foodGroup=createGroup();
  obstacleGroup=createGroup();
 
 
  monkey=createSprite(100,330,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
 
  invisibleGround = createSprite(200,370,400,10);
  invisibleGround.visible = true;
 
 ground=createSprite(400,350900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
}


function draw() {
  createCanvas(400,400);
  background(220);
 
  spawnBanana();
 
  if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
       
    }
 

    
  if(obstacleGroup.isTouching(monkey)){
      gameState=END;
    obstacleGroup.destroyEach();
  
    
  }
  
  
    monkey.velocityY = monkey.velocityY + 0.8
 
 
    monkey.collide(invisibleGround);
 
  drawSprites();
 
 
  stroke("black");
   textSize(20);
    fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:",survivalTime,100,50);
}

function spawnBanana(){

 if (frameCount % 80 === 0) {
    var banana = createSprite(200,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale =0.1;
    banana.velocityX = -3;
   
     banana.lifetime = 200;
   
   foodGroup.add(banana);
   
  }
 

 if (frameCount % 300 === 0) {
    var obstacle = createSprite(300,350,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale =0.1;
    obstacle.velocityX = -3;
   
     obstacle.lifetime = 200;
   obstacleGroup.add(obstacle);
   
  }





}




