
// Create canvas variable
var canvas=new fabric.Canvas('myCanvas');
//Set initial positions for ball and hole images.
ball_y=0;
ball_y=0;
ball_y=400;
ball_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.formURL("golf-h1.png",function(Img){
		hole_obj=Img:
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	fabric.Image.formURL("ball.png",function(Img){
ball_obj=img;
ball_obj.scaleToWidth(50);
ball_obj.scaleToHeight(50);
ball_obj.set({
	top:ball_y,
	left:ball_x
});
canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if(( ball_x==hole_x)&&(ball_y=hole_y)){
		canvas.remove(ball.obj);
		document.getElementById("hd3").innerHTML="you have hit the goal!!!!!!!!!!";
		document.getElementById("myCanvas").style,borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	if
	{
		
	}

	function down()
	{
		if(ball_y<=450)
		{
			ball_y=ball_y=block_image_height;
			console.log("block_image_height="+block_image_height);
			console.log("while down arrow is pressed, x="="ball_x+")
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
	
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
		
		}
	}
	
}

