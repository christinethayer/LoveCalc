App.populator('home', function (page) {
	// put stuff here
	console.log("testing I'm on the home page");
	$(page).find('#You').clickable().on('click', function () {
		App.load('You');
	 });
	$(page).find('#Friends').clickable().on('click', function () {
		App.load('Friends');
	 });

	$(page).find('#People').clickable().on('click', function () {
		App.load('People');
	 });
});