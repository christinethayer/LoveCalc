App.populator('home', function(page, user) {

	$(page).find('#You').clickable().on('click', function() {
		App.load('You', user);
	});
	$(page).find('#Friends').clickable().on('click', function() {
		App.load('Friends');
	});

	$(page).find('#People').clickable().on('click', function() {
		App.load('People');
	});
});