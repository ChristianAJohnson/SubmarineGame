
var value = 0;
var subx = 0;
var suby = 0;
var minex =  200;
var miney = 200;
var topx = 0;
var topy = 0;


function setup()
{
	
	createCanvas(640,480)
	subPic = loadImage("images/submarine.png")
	minePic = loadImage("images/depth-charge1.png")
	torpedoPic = loadImage("images/torpedo.png")
	explosion = loadImage("images/explosion.png")
	background(0,0,255)
	submarine(subx,suby)
}

function draw()
{
  submarine(subx,suby)
  mines(200,200);

}

function torpedo(topx,topy)
{
	image(torpedoPic,topx,topy)
}

function submarine(subx,suby)
{
	image(subPic, subx,suby)
}

function mines(minex,miney)
{
	image(minePic, minex,miney)
}
 

function keyPressed() // this function controls the submarine and the laucnhign of the torpedo
{
  if (keyCode === LEFT_ARROW)
  {
    clear()
    background(0,0,255)
    submarine(subx-=10,suby)
    detonation();

    console.log("The coordinates for sub x is " + subx + " and sub y " + suby)
    console.log("The coordinates for mine x is " + minex + " and mine y " + miney)
  } 
  else if (keyCode === RIGHT_ARROW) 
  {
    clear();
    background(0,0,255)
    submarine(subx+=10,suby);
    detonation();

    console.log("The coordinates for sub x is " + subx + " and suby " + suby)
    console.log("The coordinates for mine x is " + minex + " and miney " + miney)
  } 
  else if (keyCode === DOWN_ARROW) 
  {
    clear();
    background(0,0,255)
    submarine(subx,suby+=10)
    detonation();

    console.log("The coordinates for sub x is " + subx + " and suby " + suby)
    console.log("The coordinates for mine x is " + minex + " and miney " + miney)
  }
  else if (keyCode === UP_ARROW)
  {
  	clear();
    background(0,0,255)
    submarine(subx,suby-=10)
    detonation();

    console.log("The coordinates for sub x is " + subx + " and suby " + suby)
    console.log("The coordinates for mine x is " + minex + " and miney " + miney)
  }
  else if (keyCode === 32)
  {
  	clear();
    background(0,0,255)
    // submarine(subx,suby)
    torpedo(subx+=15,suby)
  }
}

function detonation() // this checks for the submarine hitting the depth charge and then blowing up the ship
{
	if(subx === minex && suby === miney)
	{
		clear();
		background(0,0,255)
		image(explosion, minex,miney)
	}
}










