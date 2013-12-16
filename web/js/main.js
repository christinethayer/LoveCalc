(function (App) {

	if (cards.browser && cards.browser.setOrientationLock) {
	    cards.browser.setOrientationLock('portrait');
	}

	// console.log("Main Page");
	// App.load('signup');

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
