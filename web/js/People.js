App.populator('People', function(page) {
	var user1 = new Array();
	var user2 = new Array();

	user1 = $(page).find("#user1");
	user2 = $(page).find("#user2");

	$(page).find('#calc').on('click', function() {
		console.log(user1);
		console.log(user1);

		if (user1[0].value === "" || user2[0].value === "") {
			App.dialog({
				title: 'Unable to Calgit culate',
				text: 'Names must be longer than 1 character',
				okButton: 'OK'
			});
		} else {
			App.load('Calc', {
				'user1': user1,
				'user2': user2
			});
			App.removeFromStack(1);
		}

	});

});