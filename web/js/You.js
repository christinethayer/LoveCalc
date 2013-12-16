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
		user1[1] = yourThumb;
		user1[2] = user.username;
	})

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
		        var crushThumb = $('<img />');
		        crushThumb.attr('src',users[0].thumbnail);
		        $(page).find('#crushthumb').replaceWith(crushThumb);
		       	//Should return the image back to a circle 
		        $(page).find('#crushthumb').removeClass('heart');

		        var crushName = users[0].fullName;
		        $(page).find("#yourcrush").text(crushName);

		        user2[0] = crushName;
		        user2[1] = crushThumb;
		        user2[2] = users[0].username;
		    }
		});
	});

	$(page).find('#calc').clickable().on('click', function () {
		console.log("my info " + user1);
		console.log("crush info " + user2);
		App.load('Calc', {'user1' : user1, 'user2' : user2});
	});

});