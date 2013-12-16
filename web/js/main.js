(function (App) {

	if (cards.browser && cards.browser.setOrientationLock) {
	    cards.browser.setOrientationLock('portrait');
	}

	console.log("Main Page");
	App.load('home');

	App.populator('home', function (page) {
		// put stuff here
		console.log("testing I'm on the home page");
		$(page).find('#You').clickable().on('click', function () {
			console.log("I pushed button1");
			App.load('You');
		 });
		$(page).find('#Friends').clickable().on('click', function () {
			console.log("I pushed button2");
			App.load('Friends');
		 });

		$(page).find('#People').clickable().on('click', function () {
			console.log("I pushed button3");
			App.load('People');
		 });

	});

	App.populator('You', function (page) {
		// put stuff here
		console.log("testing you");
	});
	App.populator('Friends', function (page) {
		// put stuff here
		console.log("testing friends");
	});
	App.populator('People', function (page) {
		// put stuff here
		console.log("testing people");
		console.log(page);
		console.log($(page).find('#user1'));
		console.log($(page).find('#user2'));
	});
	App.populator('Calc', function (page) {
		// put stuff here
		console.log("testing calc");
	});

	try {
		App.restore();
	} catch (err) {
		App.load('home');
	}
})(App);
