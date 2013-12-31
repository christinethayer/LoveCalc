App.populator('You', function(page, user) {
	var user1 = new Array();
	var user2 = new Array();

	//Fetch your user info & replace the default
	cards.kik.getUser(function(user) {
		user1[0] = user.fullName;
		user1[1] = user.thumbnail;
		user1[2] = user.username;

		$(page).find('#yourpic').attr('src', 'img/noprofile.png');
		if (user1[1]) {
			cards.ready(function () {
				cards.utils.preloadImage(user1[1], function (success) {
                	if (success) {
						$(page).find('#yourpic').attr('src', user1[1]);
					}
				});
			});
		}
		$(page).find("#yourname").text(user1[0]);
	})

	//Select a second user
	$(page).find('#crushpic').clickable().on('click', function() {
		$(page).find('#heartp').addClass('active');
		cards.kik.pickUsers({
			minResults: 0, // number >= 0
			maxResults: 1 // number >  0
		}, function(users) {
			if (!users) {
				return; //Action was cancelled by user
			} else {
				$(page).find('#heartp').remove();
				$(page).find('#defaultText').remove();
				$(page).find('.heartplus').removeClass('heartplus');

				user2[0] = users[0].fullName;
				user2[1] = users[0].thumbnail;
				user2[2] = users[0].username;

				$(page).find('#user2pic').attr('src', 'img/noprofile.png');
				if (user2[1]) {
					cards.ready(function () {
						cards.utils.preloadImage(user2[1], function (success) {
               				if (success) {
								$(page).find('#user2pic').attr('src', user2[1]);
							}
						});
					});
				}
				$(page).find("#user2name").text(user2[0]);

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