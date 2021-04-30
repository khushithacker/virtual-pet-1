//Create variables here
var dog,sadDog,happyDog;
var feed;
var milk, m, b;
function preload()
{
  //load images here
  sadDog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
  m=loadImage("images/Milk.png");
  b=loadImage("images/bottle.jpg");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed the dog");
  feed.position(800,390);
  feed.mousePressed(feedDog);
  feed.mouseReleased(stopFeedingDog);

  milk=createSprite(760,235,150,150);
  milk.scale=0.050;
}

function draw() {  
  background(46,139,87);

fill(255,255,254);
text("press the button to feed your dog noddy", 400, 30, 500, 100);
textSize(15);

  drawSprites();
}
  function stopFeedingDog(){
    dog.addImage(sadDog);
    milk.addImage(m);
  }

  function feedDog(){
    dog.addImage(happyDog);
    milk.addImage(b);
  }
