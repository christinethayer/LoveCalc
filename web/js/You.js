App.populator('You', function (page, user) {
	//Fetch your user info & replace the default
	cards.kik.getUser(function (user){

		var yourThumb = $('<img />');
		yourThumb.attr('src',user.thumbnail);
		$(page).find('#yourthumb').replaceWith(yourThumb);

		var yourName = user.fullName;
		$(page).find("#yourname").text(yourName);
	})

});