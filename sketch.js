const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var robber
var ground
var bananas
var car1, car2
var coins

function preload(){
    bg = loadImage("background.jpg")
    bananas = loadImage("bananas.1.png")
    car1 = loadImage("car1.1.png")
    car2 = loadImage("car2.1.png")
    coins = loadImage("coins.1.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-150);
    bg1 = createSprite(displayWidth/2, displayHeight/2-150,);
    bg1.addImage(bg)
    bg1.velocityX = -2

    robber1 = createSprite(222,464,10,50)
    robber1.shapeColor = "blue"
    ground1 = createSprite(displayWidth/2, displayHeight-250, displayWidth, 5)
    ground1.visible = false
}
function draw(){
    background(0);
    if (bg1.x< 630){
        bg1.x = displayWidth/2+30
    }

    if (keyDown("space")){
        robber1.velocityY = -12
    }
robber1.velocityY=robber1.velocityY+0.8

robber1.collide(ground1)

spawnObstacles()

    drawSprites()
    stroke ("red")
    text("x:" +mouseX + ", y:" +mouseY,mouseX,mouseY)
}

function spawnObstacles(){
    if (frameCount%200===0){
        car = createSprite(displayWidth, displayHeight-250, 10,50)
        car.velocityX= -5
        var num=Math.round(random(1,4))
        if (num === 1){
            car.addImage(car1)

        }
        else if(num === 2){
            car.addImage(car2)
        }
        else if(num === 3){
            car.addImage(coins)
        }

        else {
            car.addImage(bananas)
        }

        car.scale = 0.5
        //car.rotation = -180
    }
}