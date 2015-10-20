function doIt(theExpression){

	try{
		var total = eval(theExpression);
	} catch (e){
		if( e instanceof SyntaxError){
			alert("ERROR!! ERROR!! ERROR Numbers are required to compute... Error!" );
			return;
		}
	}

	if(total == 41){
		var snd = new Audio("spaceship.m4a");
		snd.play();
		var element = document.getElementById('hotness'),
			left = -500,
			lastFrame = +new Date,
			timer;
		//Move the element right 600px
		timer = setInterval(function(){
			var now = +new Date,
			deltaT = now - lastFrame;
			element.style.left = (left += 15 * deltaT / 16) + "px";
			lastFrame = now;
			//clear the time and stop the animation
			if(left > 3000){
				clearInterval(timer);
			}
		}, 16);
	}

		var total = eval(theExpression);
		Calc.Input.value = total;
}


document.onkeyup = KeyCheck;       
function KeyCheck()

{

   var keyID = event.keyCode;
   console.log(keyID);

   switch(keyID)

   {
   		case 49:{
   			console.log(1);
   		}
	}
}


