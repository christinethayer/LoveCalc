(function (App) {

	if (cards.browser && cards.browser.setOrientationLock) {
	    cards.browser.setOrientationLock('portrait');
	}

	if (!cards.kik || !cards.kik.hasPermission || !cards.kik.hasPermission()) {
	    App.load('signup');
	} else {
	    if (cards.kik.returnToConversation) {
    		var user1 = new Array();

    		cards.kik.getUser(function (user){
    			user1[0] = user.fullName;
    			user1[1] = user.thumbnail;
    			user1[2] = user.username;
    		});
			App.load('Calc', cards.browser.linkData);
			App.addToStack(0, ['home']); //Add home to the back stack

	    } else {
	        try {
	            App.restore();
	        } catch(err) {
	            App.load('home');
	        }
	    }
	}

})(App);
