App.populator('You', function (page, user) {
	var user1 = new Array();
	var user2 = new Array();

	//Fetch your user info & replace the default
	cards.kik.getUser(function (user){
		var yourThumb = $('<img />');
		yourThumb.attr('src',user.thumbnail);
		$(page).find('#yourthumb').replaceWith(yourThumb);

		var yourName = user.fullName;
		$(page).find("#yourname").text(yourName);

		user1[0] = yourName;
		user1[1] = user.thumbnail;
		user1[2] = user.username;
	})

	//Select a second user
	$(page).find('#crushthumb').clickable().on('click', function () {
		cards.kik.pickUsers({
		    minResults : 0 , // number >= 0
		    maxResults : 1   // number >  0
		}, function (users) {
		    if ( !users ) {
		        // action was cancelled by user
		        return;
		    }
		    else{
		        var user2Thumb = $('<img />');
		        user2Thumb.attr('src',users[0].thumbnail);
		        $(page).find('.heart').removeClass('heart');
		        $(page).find('#crushthumb').replaceWith(user2Thumb);

		        var user2Name = users[0].fullName;
		        $(page).find("#yourcrush").text(user2Name);

		        user2[0] = user2Name;
		        user2[1] = users[0].thumbnail;
		        user2[2] = users[0].username;

	        	//Once two users are selected add the Calculate button
	        	var calcButton = $('<div />');
	          	calcButton.addClass('app-button');
	           	calcButton.text("Calculate!");
	           	calcButton.attr('id', 'calc')
	           	$(page).find('.calc-section').append(calcButton);

	           	calcButton.clickable().on('click', function (){
	           		App.load('Calc', {'user1' : user1, 'user2' : user2});
	           		App.removeFromStack(1);
	           	});
		    }
		});
	});

});