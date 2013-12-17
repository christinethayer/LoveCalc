App.populator('Calc', function (page, users) {
	var user1= users.user1;
	var user2= users.user2;

	// User1: Name & Profile Pic to the match screen
	var user1N;
	if( user1[0].type === "text" ){
		user1[0] = user1[0].value; //Change names from input type to string
	}
	user1N = user1[0];
	$(page).find("#user1name").text(user1N);

	var user1Thumb = $('<img />');
	if( user1[1] === undefined ){
		user1[1] = "http://kik.com/profile/images/nopic.jpg";
	}
	user1Thumb.attr('src',user1[1]);
	$(page).find('#user1thumb').replaceWith(user1Thumb);

	// User2: Name & Profile Pic to the match screen
	var user2N; 
	if (user2[0].type === "text") {
		user2[0] = user2[0].value;
	}
	user2N = user2[0];
	$(page).find("#user2name").text(user2N);
	var user2Thumb = $('<img />');
	if( user2[1] === undefined ){
		user2[1] = "http://kik.com/profile/images/nopic.jpg";
	}
	user2Thumb.attr('src',user2[1]);
	$(page).find('#user2thumb').replaceWith(user2Thumb);

	// Match Result: Matching algorithm
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
		// else if(u1==="adam.allidina" &&& u2="kylelobban"){
		//  	return "96% match!";
		// }
		else{
			var res=Math.random();
			res=res*100;
			res=parseInt(res);

			return "You are a " + res +"% test match!";
		}
	}
});
