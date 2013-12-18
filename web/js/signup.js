App.populator('signup', function (page) {
	$(page).find('#login').clickable().on('click', function () {
		$(page).find('.app-button').addClass('disabled');
		$(page).find('.app-button').text('Signing in...');
		$(page).find('.app-button')[0].disabled = true;

		cards.kik.getUser(function (user){
			if (cards.kik.hasPermission()){
				App.load('home', user);
				App.removeFromStack(0);
			}
		});
		
		if (!cards.kik.hasPermission()) {
			console.log("should call clean up")
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
    		console.log("remove");
    	    $(page).find('.app-button').removeClass('disabled');
    	    $(page).find('.app-button').text(buttonText);
    	    $(page).find('.app-button')[0].disabled = false;
    	}
	});
});		