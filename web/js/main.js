(function (App) {

	if (cards.browser && cards.browser.setOrientationLock) {
	    cards.browser.setOrientationLock('portrait');
	}

	if (!cards.kik || !cards.kik.hasPermission || !cards.kik.hasPermission()) {
	    App.load('signup');
	} else {
	    if (cards.kik.returnToConversation) {
    		console.log(cards.browser.linkData);

    		var user1 = new Array();

    		cards.kik.getUser(function (user){
    			user1[0] = user.fullName;
    			user1[1] = user.thumbnail;
    			user1[2] = user.username;
    		});
    		console.log(user1);

			App.addToStack(0, ['home']);
			App.load('Calc', cards.browser.linkData);

	    } else {
	        // try {
	        //     App.restore();
	        // } catch(err) {
	            App.load('home');
	       	// }
	    }
	}

})(App);
