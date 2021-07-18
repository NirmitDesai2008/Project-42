var spacebackgroundImage;
var iss, issImage;
var spacecraft, spacecraftImage;
var spacecraftsmoke, spacecraftleftsmoke, spacecraftrightsmoke;
var hasDocked = false;

function preload(){
  spacebackgroundImage = loadImage("sprites/Spacebackground.jpg");
  issImage = loadImage("sprites/ISS.png");
  spacecraftImage = loadImage("sprites/Spacecraft1.png");
  spacecraftsmoke = loadImage("sprites/Spacecraft2.png");
  spacecraftleftsmoke = loadImage("sprites/Spacecraft3.png");
  spacecraftrightsmoke = loadImage("sprites/Spacecraft4.png");
}

function setup(){
  createCanvas(1280,657);

  iss = createSprite(600,260,50,50);
  iss.addImage(issImage);

  spacecraft = createSprite(600,500);
  spacecraft.addImage(spacecraftImage);
  spacecraft.scale = 0.4;
}

function draw(){
  background(spacebackgroundImage);  
  
  if (!hasDocked){
    if (keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraftleftsmoke);
      spacecraft.x = spacecraft.x-1;
    }

    if (keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraftrightsmoke);
      spacecraft.x = spacecraft.x+1;
    }

    if (keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraftsmoke);
    }

    if (keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-2;
    }
  }

    if (spacecraft.y<=(iss.y+140) && spacecraft.x<=(iss.x-60)){
      hasDocked = true;
      fill("yellow");
      textSize(35);
      text("Docking Successful !!",450,600);
    }

  drawSprites();
}