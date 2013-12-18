App.populator('Calc', function (page, users) {
	var user1= users.user1;
	var user2= users.user2;

	// User1: Name & Profile Pic to the match screen
	var user1name;
	if( user1[0].type === "text" ){
		user1[0] = user1[0].value; //Change names from input type to string
	}
	user1name = user1[0];
	$(page).find("#user1name").text(user1name);
	var user1pic = $('<img />');
	if( user1[1] === undefined ){
		user1[1] = "http://kik.com/profile/images/nopic.jpg";
	}
	user1pic.attr('src',user1[1]);
	$(page).find('#user1pic').replaceWith(user1pic);

	// User2: Name & Profile Pic to the match screen
	var user2name; 
	if (user2[0].type === "text") {
		user2[0] = user2[0].value;
	}
	user2name = user2[0];
	$(page).find("#user2name").text(user2name);
	var user2pic = $('<img />');
	if( user2[1] === undefined ){
		user2[1] = "http://kik.com/profile/images/nopic.jpg";
	}
	user2pic.attr('src',user2[1]);
	$(page).find('#user2pic').replaceWith(user2pic);

	// Match Result: Matching algorithm
	var result = $('<h1 />');
	result.text(matching(user1, user2));
	$(page).find("#matchResult").append(result);

	function matching(user1, user2) {
		//Formatting the strings
		u1 = user1[0].toLowerCase();
		u2 = user2[0].toLowerCase();
		u1=u1.replace(/\s+/g,"");
		u2=u2.replace(/\s+/g,"");

		var res;

		if(u1==="christinethayer"){
			res=100;
		}
		else if((u1==="adamallidina" && u2==="kylelobban") || (u1==="kylelobban" && u2==="adamallidina") ){
		  	res=96;
		}
		else{
			console.log(u1);
			console.log(u2);
			var res=Math.random();
			res=res*100;
			res=parseInt(res);

		}
		return "You are a " + res +"% match!";
	}

	//Send Results: Via Kik
	var kikButton = $('<div />');
  	kikButton.addClass('app-button kik');
   	//kikButton.text("Kik!");
   	kikButton.attr('id', 'kik');
   	$(page).find('.app-topbar').append(kikButton);
   	var linkData = {'user1' : user1, 'user2' : user2};

   	kikButton.clickable().on('click', function (){
		var KikTitle = "yo";
		var KikDescription = "You ain't a match";
	    var KikImg = "img/icon2.png";
	    var KikLinkData = JSON.stringify(linkData);

		cards.kik.send({
			  title    : KikTitle                    ,
			  text     : KikDescription              ,
			  pic      : KikImg                      ,
			  big      : true                         , 
			  linkData : KikLinkData 
		});

	});
});
