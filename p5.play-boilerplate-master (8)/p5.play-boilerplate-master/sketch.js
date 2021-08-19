var rope,rope2;
var ground;







function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  rope = new Rope(8,{x:40,y:30});
  rope2 = new Rope(7,{x:370,y:40});
  ground = new Ground(100,100,50,50);
}

function draw() {
  background(255,255,255);  

  
  rope.show();
  rope2.show();
  drawSprites();
}