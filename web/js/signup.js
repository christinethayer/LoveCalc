App.populator('signup', function (page) {
	// put stuff here
	console.log("signup page");
	var $button    = $(page).find('.app-button'),
	                buttonText = $button.text();

	$(page).find('#login').clickable().on('click', function () {
		//Adding "Signing In... state"
		$button
			.addClass('disabled')
			.text('Signing in...');
		$button[0].disabled = true;

		cards.kik.getUser(function (user){
			if (cards.kik.hasPermission()){
				App.load('home', user);
				App.removeFromStack(0);
			}
		});
		
		if (!cards.kik.hasPermission()) {
			cleanUp();
		} else {
	        App.dialog({
	        	title        : 'Failed to Sign In' ,
	        	text         : 'Looks like there was a network problem. Try again in a bit.' ,
	        	okButton     : 'Try Again',
	        	cancelButton : 'Cancel'
	    	}, function (retry) {
	      		if (retry) {
	           		loginUser(cleanUp);
	      	 	} else {
	           		cleanUp();
	       		}
	        });
	    }
    	
    	function cleanUp() {
    	    $button
    	     	.removeClass('disabled')
    	     	.text(buttonText);
    	    $button[0].disabled = false;
    	}
	});
});		