App.populator('Friends', function(page) {
	var user1 = new Array();
	var user2 = new Array();

	$(page).find('#friends').clickable().on('click', function() {
		cards.kik.pickUsers({
			minResults: 2, // number >= 0
			maxResults: 2 // number >  0
		}, function(users) {
			if (!users) {
				return; //Action was cancelled by user
			} else {
				//Remove default select friends image
				$(page).find('#friends').remove();
				$(page).find('#friendText').remove();
				$(page).find('.friendPicker').removeClass('friendPicker');
				$(page).find('.defaultFriends').removeClass('defaultFriends');

				//Defining User1 and User2
				user1[0] = users[0].fullName;
				user1[1] = users[0].thumbnail;
				if (user1[1] === null) {
					user1[1] = "img/noprofile.png";
				}
				user1[2] = users[0].username;
				user2[0] = users[1].fullName;
				user2[1] = users[1].thumbnail;
				if (user2[1] === null) {
					user2[1] = "img/noprofile.png";
				}
				user2[2] = users[1].username;

				//Add UI to make it the same as You & Crush
				$(page).find('#user1name').text(user1[0]);
				$(page).find('#user1pic').attr('src', user1[1]);
				$(page).find('#user2name').text(user2[0]);
				$(page).find('#user2pic').attr('src', user2[1]);

				//Once two users are selected add the Calculate button
				var calcButton = $('<div />');
				calcButton.addClass('app-button');
				calcButton.text("Calculate!");
				calcButton.attr('id', 'calc');
				$(page).find('.calc-section').append(calcButton);

				calcButton.clickable().on('click', function() {
					App.load('Calc', {
						'user1': user1,
						'user2': user2
					});
					App.removeFromStack(1);
				});
			}
		});
	});
});