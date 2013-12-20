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
				user1[2] = users[0].username;
				user2[0] = users[1].fullName;
				user2[1] = users[1].thumbnail;
				user2[2] = users[1].username;
				 
				$(page).find('#user1pic').attr('src', 'img/noprofile.png');
				if (user1[1]) {
					console.log(user1[1]);
					cards.ready(function () {
						cards.utils.preloadImage(user1[1], function (success) {
               				if (success) {
								console.log(user1[1]);
								$(page).find('#user1pic').attr('src', user1[1]);
							}
						});
					});
				}
				$(page).find('#user2pic').attr('src', 'img/noprofile.png');
				if (user2[1]) {
					cards.ready(function () {
						cards.utils.preloadImage(user2[1], function (success) {
               				if (success) {
								$(page).find('#user2pic').attr('src', user2[1]);
								console.log("you should not happen");
							}
						});
					});
				}

				//Add UI to make it the same as You & Crush
				$(page).find('#user1name').text(user1[0]);
				//$(page).find('#user1pic').attr('src', user1[1]);
				$(page).find('#user2name').text(user2[0]);
				//$(page).find('#user2pic').attr('src', user2[1]);

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