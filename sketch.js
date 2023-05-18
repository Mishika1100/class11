console.log("Manan")
var trex, ground
var trexRunning, groundImage
var groundInvisible
function preload() {
  trexRunning = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundImage = loadImage("ground2.png")
}
function setup() {
  createCanvas(600, 200)
  trex = createSprite(50, 160, 20, 50)
  trex.addAnimation("tr", trexRunning)
  trex.scale = 0.6
  ground = createSprite(200, 180, 400, 20)
  ground.addImage(groundImage)
  groundInvisible = createSprite(200, 195, 400, 20)
  groundInvisible.visible = false
}

function draw() {
  background(220)
  ground.velocityX = -3
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  if (keyDown("space") & trex.y > 130) {
    console.log(trex.y)
    trex.velocityY = -10
  }

  trex.velocityY = trex.velocityY + 0.5
  trex.collide(groundInvisible)

  drawSprites()
}