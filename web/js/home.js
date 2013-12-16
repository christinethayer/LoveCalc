App.populator('home', function (page, user) {
	cards.kik.getUser(function (user){
		console.log(user.username);
	})

	console.log(user.username);
	// put stuff here
	console.log("testing I'm on the home page");
	$(page).find('#You').clickable().on('click', function () {
		App.load('You', user);
	 });
	$(page).find('#Friends').clickable().on('click', function () {
		App.load('Friends');
	 });

	$(page).find('#People').clickable().on('click', function () {
		App.load('People');
	 });
});