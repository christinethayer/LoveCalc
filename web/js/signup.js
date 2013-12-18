App.populator('signup', function (page) {
	$(page).find('#login').clickable().on('click', function () {
		$(page).find('.app-button').addClass('disabled');
		$(page).find('.app-button').text('Signing in...');
		$(page).find('.app-button')[0].disabled = true;

		getUserData(function(user) {
		    if (user) {
				App.load('home', user);
				App.removeFromStack(0); //Removes login screen from stack
			}
			else if(!cards.kik.hasPermission()){
				cleanUp();
			}
			else {
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
		});
			
    	function cleanUp() {
    	    $(page).find('.app-button').removeClass('disabled');
    	    $(page).find('.app-button').text("Sign in with Kik");
    	    $(page).find('.app-button')[0].disabled = false;
    	}
	});
	function getUserData(callback) {
	    cards.kik.getUser(function (user) {
           if ( !user ) {
                   callback();
                   return;
           }
           else {
                   callback(user);
           }
   		});
	}
});		