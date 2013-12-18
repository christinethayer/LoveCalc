App.populator('Calc', function(page, users) {
	var user1 = users.user1;
	var user2 = users.user2;

	// User1: Name & Profile Pic to the match screen
	var user1name;
	if (user1[0].type === "text") {
		user1[0] = user1[0].value; //Change names from input type to string
	}
	user1name = user1[0];
	$(page).find("#user1name").text(user1name);
	var user1pic = $('<img />');
	if (user1[1] === undefined) {
		user1[1] = "img/noprofile.png";
	}
	user1pic.attr('src', user1[1]);
	$(page).find('#user1pic').replaceWith(user1pic);
	if (user1[2] === undefined) {
		user1[2] = "nonkikuser";
	}

	// User2: Name & Profile Pic to the match screen
	var user2name;
	if (user2[0].type === "text") {
		user2[0] = user2[0].value;
	}
	user2name = user2[0];
	$(page).find("#user2name").text(user2name);
	var user2pic = $('<img />');
	if (user2[1] === undefined) {
		user2[1] = "img/noprofile.png";
	}
	user2pic.attr('src', user2[1]);
	$(page).find('#user2pic').replaceWith(user2pic);
	if (user2[2] === undefined) {
		user2[2] = "nonkikuser";
	}

	// Match Result: Matching algorithm
	var result = $('<h1 />');
	result.text(matching(user1, user2));
	$(page).find("#matchResult").append(result);

	function matching(user1, user2) {
		u1name = user1[0].toLowerCase();
		u2name = user2[0].toLowerCase();
		u1name = u1name.replace(/\s+/g, "");
		u2name = u2name.replace(/\s+/g, "");
		u1pic = user1[1];
		u2pic = user2[1];
		u1username = user1[2].toLowerCase();
		u2username = user2[2].toLowerCase();

		//console.log(u1username);
		//console.log(u2username);
		var res;
		if (u1username === "christine" || u2username === "christine") {
			res = 100;
		} else if ((u1username === "adam.allidina" && u2username === "kylelobban") || (u1username === "kylelobban" && u2username === "adam.allidina")) {
			res = 96;
		} else if ((u1username === "becky" && u2username === "ayson89") || (u1username === "ayson89" && u2username === "becky")) {
			res = 98;
		} else if ((u1username === "bigdaddio" && u2username === "thayersj") || (u1username === "thayersj" && u2username === "bigdaddio")) {
			res = 1000;
		} else if ((u1username === "mpr" && u2username === "andrea.roberts") || (u1username === "andrea.roberts" && u2username === "mpr")) {
			res = 100;
		} else if ((u1username === "newton.laura" && u2username === "mike.costa") || (u1username === "mike.costa" && u2username === "newton.laura")) {
			res = 98;
		} else {
			function calcLoveName(user1, user2) {
				var coupleName = user1 + user2;
				var coupleNameLength = coupleName.length;
				var loveCount = 0;
				for (i = 0; i < coupleNameLength; i++) {
					letter1 = coupleName.substring(i, i + 1);
					if (letter1 == 'i') loveCount += 4;
					if (letter1 == 'l') loveCount += 4;
					if (letter1 == 'o') loveCount += 4;
					if (letter1 == 'v') loveCount += 4;
					if (letter1 == 'e') loveCount += 4;
					if (letter1 == 'y') loveCount += 5;
					if (letter1 == 'o') loveCount += 1;
					if (letter1 == 'u') loveCount += 5;
				}
				return loveCount;
			}
			function calcLovePic(user1, user2) {
				console.log(user1);
				console.log(user2);
				if ((user1 !== "img/noprofile.png" && user2 === "img/noprofile.png") || (user1 === "img/noprofile.png" && user2 !== "img/noprofile.png")) {
					return 0;
				} else {
					return 10;
				}
			}
			function calcLoveUsername(user1, user2) {
				return 20;
			}
			res = calcLoveName(u1name, u2name) + calcLovePic(u1pic, u2pic) + calcLoveUsername(u1pic, u2pic);

			function hash(res) {
				//normalize the data to % <=100
				// randomize function with a seed
				return;
			}
		}
		return "You are a " + res + "% match!";
		//If res <50 should have broken heart image on the match scren
		//If res 50-90 should add a nice heart image
		//If res 100% should have a perfect match image
	}

	//Send Results: Via Kik
	var kikButton = $('<div />');
	kikButton.addClass('app-button kik');
	kikButton.attr('id', 'kik');
	$(page).find('.app-topbar').append(kikButton);
	var linkData = {
		'user1': user1,
		'user2': user2
	};

	kikButton.clickable().on('click', function() {
		var KikTitle = "yo";
		var KikDescription = "You ain't a match";
		var KikImg = "img/icon2.png";
		var KikLinkData = JSON.stringify(linkData);

		cards.kik.send({
			title: KikTitle,
			text: KikDescription,
			pic: KikImg,
			big: true,
			linkData: KikLinkData
		});

	});
});