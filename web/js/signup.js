App.populator('signup', function (page) {
	// put stuff here
	console.log("signup page");

	var authenticated = false;

	console.log('test');

	$(page).find('#login').clickable().on('click', function () {
		//Check if have user permission here
		console.log("logging in");
		//Will probably need to remove the Login page from back stack
		App.load('home');
	 });
});