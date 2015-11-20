$(document).ready(function(){

	//6 Extra effects
	//1
	$('h1').animate({
		marginLeft: "0"
	}, 300);


	//2
	$('h1').dblclick(function() {
		$('h1').animate({
			marginLeft: "-200"
		}, 300);
		$('h1').attr({
			class: 'logoClassPink'
		})
	});


	//Hover Effect (3)
	$('#homelink').hover(function(event){
		$('aside').slideDown();
		$('aside').attr({
			class: 'homeAside'
		})
		$('aside').text("'Shoot for the moon. Even if you miss, you'll land among the stars' - Les Brown")
	})

	$('#aboutlink').hover(function(event){
		$('aside').slideDown();
		$('aside').attr({
			class: 'aboutAside'
		})
		$('aside').text("Understand the balance and body of Ruthton Roasters")
	})

	$('#productslink').hover(function(event){
		$('aside').slideDown();
		$('aside').attr({
			class: 'productsAside'
		})
		$('aside').text("Take a journey around the world and learn about our beans")
	})

	$('#orderlink').hover(function(event){
		$('aside').slideDown();
		$('aside').attr({
			class: 'orderAside'
		})
		$('aside').text("Pack your sack full of our fresh roasts")
	})


	$('#homelink, #aboutlink, #orderlink, #productslink').mouseleave(function(event){
		$('aside').slideUp(50);
	})



	//click effect logo (2)
	$('#sliderBase').toggle(
	    function(){

	        $('#slider').animate({
	            marginLeft: "26" 
	          
	        }, 100);
	        $('#sliderBase').attr({
	        	class: "sliderBaseOn"
	        });
	        $('.prices').css("display", "inline");
	        
	    },
	    function(){
	        $('#slider').animate({
	            marginLeft: "0"
	       
	        }, 100);
	        $('#sliderBase').attr({
	        	class: "sliderBaseOff"
	        });
	        $('.prices').css("display", "none");
	});



	//5 Filtering :D
	$('#zebraControl').change(
	    function(){
	        if (this.checked) {
	            $('#productList > li:nth-child(odd)').attr({
	            	class: "zebraStriping"
	            })
	        } else {
	        	$('#productList > li:nth-child(odd)').removeClass("zebraStriping")
	        }
    });


	
	//If Else (1 & 4) (two interactive elements are the submit & the focusout)
	$('#submit').click(function(event){

		if ($('#name').val().length == 0) {
			//set border
			$('#name, label[for="name"]').attr({
				class: 'error'
			}) //end attr
			
			event.preventDefault();
		} else {
			$('#name, label[for="name"]').attr({
				class: 'none'
			});
		}



		if ($('#email').val().length == 0) {
			//set border
			$('#email, label[for="email"]').attr({
				class: 'error'
			}) //end attr
			
			event.preventDefault();
		} else {
			$('#email, label[for="email"]').attr({
				class: 'none'
			});
		}


		if ($('#phone').val().length == 0) {
			//set border
			$('#phone, label[for="phone"]').attr({
				class: 'error'
			}) //end attr
			
			event.preventDefault();
		} else {
			$('#phone, label[for="phone"]').attr({
				class: 'none'
			});
		}

	}); //end submit


	//On Focusout
	$('#name').focusout(function(event){

			if ($('#name').val().length == 0) {
				//set border
				$('#name, label[for="name"]').attr({
					class: 'error'
				}) //end attr
				
				event.preventDefault();
			} else {
				$('#name, label[for="name"]').attr({
					class: 'none'
				});
			}
	}); //end focusout

	$('#email').focusout(function(event){

			if ($('#email').val().length == 0) {
				//set border
				$('#email, label[for="email"]').attr({
					class: 'error'
				}) //end attr
				
				event.preventDefault();
			} else {
				$('#email, label[for="email"]').attr({
					class: 'none'
				});
			}
	}); //end focusout

	$('#phone').focusout(function(event){

			if ($('#phone').val().length == 0) {
				//set border
				$('#phone, label[for="phone"]').attr({
					class: 'error'
				}) //end attr
				
				event.preventDefault();
			} else {
				$('#phone, label[for="phone"]').attr({
					class: 'none'
				});
			}
	}); //end focusout



	//PART2 CODE////////////////////////////////////////////////

	$('canvas').attr({
		class: 'canvasBackgroundBlack'
	}) //end attr


	//draw the stars on click
	$('#drawCanvas').click(function() {

		//clear any old stars
		$('canvas').clearCanvas();

		var randomX; //x-position
		var randomY; //y-position
		var randomR; //radius
		var starNumber = 50;

		//loop through until all stars are drawn
		for (var i = 0; i < starNumber; i++) {

			//grab random X,Y, & R
			randomX = Math.floor((Math.random() * 300)); //grab a random value, but keep it within the canvas width
			randomY = Math.floor((Math.random() * 300)); //grab a random value, but keep it within the canvas height
			randomR = Math.floor((Math.random() * 2) + 0.5); //grab a radius between 1 & 3

			//draw a star. Chain together two arcs. Yellow star, inner white core
			$('canvas').drawArc({
			  fillStyle: '#ffffcc',
			  x: randomX, y: randomY,
			  radius: randomR
			}).drawArc({
			  fillStyle: 'white',
			  x: randomX, y: randomY,
			  radius: '0.5'
			});

		} //end for star loop
	}); //end draw click


	//clear canvas button
	$('#clearCanvas').click(function() {
		$('canvas').clearCanvas();
	}); //end clear


	//change background
	$('#space').change(function(){
		if($('#space').val() == 'Black space') {
			$('canvas').attr({
				class: 'canvasBackgroundBlack'
			});
		} else if ($('#space').val() == 'Blue space') {
			$('canvas').attr({
				class: 'canvasBackgroundBlue'
			});
		}
	}); //end change

}); //end ready

