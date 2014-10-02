function setup()
{
	createCanvas(800,600);
	noFill();
	stroke(255);
}

function draw(){
	background(40);

	
	if(mouseX<100){
		ellipse(400,300,150,150);
	}else if(mouseX<300){
		ellipse(400,300,100,100);
	}else if(mouseX<500){
		ellipse(400,300,75,75);
	}else if(mouseX<600){
		ellipse(400,300,50,50);
	}else if(mouseX<800){
		ellipse(400,300,20,20);
	}

	if(mouseY<100){
		ellipse(400,300,250,250);
	}else if(mouseY<275){
		ellipse(400,300,200,200);
	}else if(mouseY<425){
		ellipse(400,300,150,150);
	}else if(mouseY<600){
		ellipse(400,300,125,125);
	}

	if(mouseX<275){
		background(40);
	}else if(mouseX<425){
		background(Math.random()*255);
	}else if(mouse<800){
		background(40);
	}
}