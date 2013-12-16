(function (App) {

	if (cards.browser && cards.browser.setOrientationLock) {
	    cards.browser.setOrientationLock('portrait');
	}

	console.log("Main Page");
	App.load('home');

	try {
		App.restore();
	} catch (err) {
		App.load('home');
	}
})(App);
