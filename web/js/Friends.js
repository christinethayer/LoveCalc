App.populator('Friends', function (page) {
	
	var user1 = new Array();
	var user2 = new Array();
	console.log("testing friends");
	//
	$(page).find('#people').clickable().on('click', function () {
		cards.kik.pickUsers({
		    minResults : 2 , // number >= 0
		    maxResults : 2   // number >  0
		}, function (users) {
		    if ( !users ) {
		        // action was cancelled by user
		        return;
		    }
		    else{
		    	//Remove people image
		    	$(page).find('#people').remove();

		        var user1Thumb = $('<img />');
		        user1Thumb.attr('src',users[0].thumbnail);
		        $(page).find('.peoplePicker').append(user1Thumb);

		        // var user1Name = users[0].fullName;
		        // $(page).find("#peoplePicker").text(user1Name);
		        user1[0] = users[0].fullName;
		        user1[1] = users[0].thumbnail;
		        user1[2] = users[0].username;

		        var user2Thumb = $('<img />');
		        user2Thumb.attr('src',users[1].thumbnail);
		        $(page).find('.peoplePicker').append(user2Thumb);

		        // var user2Name = users[1].fullName;
		        // $(page).find("#yourcrush").text(user2Name);

		        user2[0] = users[1].fullName;
		        user2[1] = users[1].thumbnail;
		        user2[2] = users[1].username;

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