App.populator('People', function (page) {
	// put stuff here
	var user1 = new Array();
	var user2 = new Array();
	
	user1 = $(page).find("user1").value;
	user2 = $(page).find("user2").value;
	$(page).find('#calc').addClass('disabled');

	if (user1 === undefined || user2 === undefined){
		//$(page).find('#calc').addClass('disabled');
		$(page).find('#calc').on('click', function (){
			// App.dialog{
			// 	title        : 'Missing User' ,
			// 	text         : 'Looks like you forgot a user...' ,
			// 	okButton     : 'Try Again',
		});
	}
	else{
		//$(page).find('.disabled').removeClass('disabled');

		$(page).find('#calc').on('click', function (){
			App.load('Calc2', {'user1' : user1, 'user2' : user2});
		});
	}
});