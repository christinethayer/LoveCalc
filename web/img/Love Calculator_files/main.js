(function (App) {

	if (cards.browser && cards.browser.setOrientationLock) {
	    cards.browser.setOrientationLock('portrait');
	}


	if (!cards.kik || !cards.kik.hasPermission || !cards.kik.hasPermission()) {
	    App.load('signup');
	} else {
	    App.load('home');
	}

	// try {
	// 	App.restore();
	// } catch (err) {
	// 	App.load('signup');
	// }
})(App);
