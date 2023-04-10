var player,player2
var background,backgroundimg
var enemyimg,enemyimg2
var enemyGroup,enemyGroupe
var bullet,bulletImg,bulletGroup
var laser,laserImg,laserGroup
var y = false;
var enemy,enemy2;
var life = 12
var lineCollider;
var score = 0;
var blast,blastImg

function preload()
{
    player2 = loadImage("1680435143281.png")
    enemyimg = loadImage("1680436312656.png")
    backgroundimg = loadImage("photo-1585575141647-c2c436949374.jpg")
    bulletImg = loadImage("1680442372771.png")
    enemyimg2 = loadImage("images__5_-removebg-preview.png")
    laserImg = loadImage("1680442372771.png")
    blastImg = loadImage("images (6).png")
}
function setup()
{
  createCanvas(1200, 800);
    player = createSprite(500,600,200,73)
    player.addImage("SpacesHIP",player2)
    player.scale = 0.2
    enemyGroup = new Group();
    enemyGroupe = new Group();
    bulletGroup = new Group();
    laserGroup = new Group()
    lineCollider = createSprite(500,1100,9000,200)
    lineCollider.visible = false

}
function enemySpawn()
{
  enemy = createSprite(random(200,800),100,200,89)
  enemy.addImage(enemyimg)
  enemy.scale = 0.3
  enemy.velocityY += 9
  enemyGroup.add(enemy)
}
function enemySpawn2()
{
  enemy2 = createSprite(random(200,800),100,200,89)
  enemy2.addImage(enemyimg2)
  enemy2.scale = 0.6
  enemy2.velocityY += 9
  enemyGroupe.add(enemy2)
}
function shoot()
{
  if(frameCount % 7 === 0)
  {
    bullet = createSprite(player.x,player.y+34)
    bullet.velocityY -= 8
    bullet.addImage("f;jkdzfg",bulletImg)
    bullet.scale = 0.1
    bulletGroup.add(bullet)
  }
}
function draw()
{
  if(frameCount % 50 === 0)
  {
    enemySpawn()
  }
  if(frameCount % 30 === 0)
  {
    enemySpawn2()
  }

  if(keyDown("RIGHT_ARROW"))
  {
    player.x += 5
  }
  if(keyDown("LEFT_ARROW"))
  {
    player.x -= 5
  }
  if(laserGroup.isTouching(player))
  {
     life -= 1
  }
  if(keyDown("SPACE"))
  {
     shoot()
     y = true
  }
  if(bulletGroup.isTouching(enemyGroup))
  {
    blast = createSprite(enemy.x,enemy.y)
    blast.addImage("ndsg",blastImg)
    blast.scale = 0.4
    blast.lifetime = 3
    enemy.destroy()
    score += 1
  }
  if(bulletGroup.isTouching(enemyGroupe))
  {
    blast = createSprite(enemy.x,enemy.y)
    blast.addImage("ndsg",blastImg)
    blast.scale = 0.4
    blast.lifetime = 3
    enemy2.destroy()
    score += 1
  }
  if(enemyGroup.collide(lineCollider))
  {   
     enemy.destroy()
     life -= 1
  }
  if(life <= 0)
  {
     player.destroy()
  }

  background(backgroundimg)
  drawSprites();
  fill("yellow")
  textSize(30)
  text("Life : "+life,100,100)
  text("score : "+score,400,100)
}