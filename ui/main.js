console.log('Loaded!');
$(document).ready(function() {

  // import view port library function
   jQuery.extend(verge);

  // smooth scrolling of viewport to target
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 50
      }, 900);
  	});
  });
		
		/*
		function myFunctionMenu() {
    		var x = document.getElementById("myTopnav");
    		if (x.className === "topnav") {
        	x.className += " responsive";
    			} 
    		else {
        		x.className = "topnav";
    		}
    	}

    	/* JS for menu icon animation 
    	function myFunction(y) {
    		y.classList.toggle("change");
		}*/

$(document).ready(function(){
  $("button").click(function(){
    $(".nav").slideToggle("medium");
    });
  });

$(document).ready(function(){
  $("button").click(function(){
    $("#realBody").fadeTo("medium", 0.3, function(){
      $("button").click(function(){
        $("#realBody").fadeTo("medium", 1.0);
        });
      });
    });
  });
		/*
		$('a[href^="#"]').on('click',function (e) {
  			e.preventDefault();
  
  			var target = this.hash;
  			var $target = $(target);
  
  			$('html, body').animate({
    			'scrollTop': $target.offset().top
  			}, 800, 'swing');
  
		});*/
