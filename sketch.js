var bg,bg2,form,system,code,security, treasure, treasureI;
var score=0;

function preload() {
 

  bg= loadImage("aladdin_cave.jpg")
 
  //load image for the treasure background
  bg2=loadImage("aladdin_cave2.jpg")

  treasureI=loadImage("treasure.png")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",265, 200);

    fill("red")
    textSize(45)
    stroke(50)
    text("CONGRATUALATIONS", 250, 140)
   
    treasure=createSprite(500, 312, 40, 40)
    treasure.addImage(treasureI)
    treasure.scale=0.25
  }

  drawSprites()
}