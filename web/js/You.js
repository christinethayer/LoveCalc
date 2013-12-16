App.populator('You', function (page, user) {
	// put stuff here
	console.log("testing you");
	cards.kik.getUser(function (user){
		console.log(user.username);
	})
});