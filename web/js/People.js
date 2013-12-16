App.populator('People', function (page) {
	// put stuff here
	console.log("testing people");
	console.log(page);
	console.log($(page).find('#user1'));
	console.log($(page).find('#user2'));
});