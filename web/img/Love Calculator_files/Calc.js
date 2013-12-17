App.populator('Calc', function (page, users) {
	var user1= users.user1;
	var user2= users.user2;

	console.log("I'm in Calc " + user1);
	console.log("I'm in Calc " + user2);

	// Adding User1 to the match screen
	var user1Thumb = $('<img />');
	user1Thumb.attr('src',user1[1]);
	$(page).find('#user1thumb').replaceWith(user1Thumb);
	var user1N = user1[0];
	$(page).find("#user1name").text(user1N);


	// Adding User2 to the match screen
	var user2Thumb = $('<img />');
	user2Thumb.attr('src',user2[1]);
	$(page).find('#user2thumb').replaceWith(user2Thumb);
	var user2N = user2[0];
	$(page).find("#user2name").text(user2N);

	// Adding match result
	var result = $('<h1 />');
	result.text(matching(user1, user2));
	$(page).find("#matchResult").append(result);

	function matching(user1, user2) {
		//Formatting the strings
		u1 = user1[0].toLowerCase();
		u2 = user1[0].toLowerCase();
		u1=u1.replace(/\s+/g,"");
		u2=u2.replace(/\s+/g,"");

		if(u1==="christinethayer"){
			return "100% match!";
		}
		// else if(u1==="adamallidina" &&& u2="kylelobban"){
		// 	return "98% match!";
		// }
		else{
			var res=Math.random();
			res=res*100;
			res=parseInt(res);

			return "You are a " + res +"% test match!";
		}
	}
});
