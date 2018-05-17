
var value = 0;
var subx = 0;
var suby = 0;


function setup()
{
	
	createCanvas(640,480)
	subPic = loadImage("images/submarine.png")
	minePic = loadImage("images/depth-charge1.png")
	background(0,0,255)
	submarine(subx,suby)
}

function draw()
{
  submarine(subx,suby)
}

function submarine(subx,suby)
{
	image(subPic, subx,suby)
}

function mines(minex,miney)
{
	image(minePic, subx,suby)
}

function keyPressed() 
{
  if (keyCode === LEFT_ARROW)
  {
    clear()
    background(0,0,255)
    submarine(subx-=10,suby)
  } 
  else if (keyCode === RIGHT_ARROW) 
  {
    clear();
    background(0,0,255)
    submarine(subx+=10,suby);
  } 
  else if (keyCode === DOWN_ARROW) 
  {
    clear();
    background(0,0,255)
    submarine(subx,suby+=10)
  }
  else if (keyCode === UP_ARROW)
  {
  	 clear();
    background(0,0,255)
    submarine(subx,suby-=10)
  }
}


