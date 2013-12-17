App.populator('People', function (page) {
	// put stuff here
	var user1 = new Array();
	var user2 = new Array();
	
	user1 = $(page).find("#user1");
	user2 = $(page).find("#user2");
	//$(page).find('#calc').addClass('disabled');

	if (user1 === undefined || user2 === undefined){
		//$(page).find('#calc').addClass('disabled');
		$(page).find('#calc').click(promptUser);
		
		function promptUser(){
			console.log("warning incoming game...");
			// App.dialog{
			// 	title        : 'Missing User' ,
			// 	text         : 'Looks like you forgot a user...' ,
			// 	okButton     : 'Try Again',
		}
	}
	else{
		//$(page).find('.disabled').removeClass('disabled');

		$(page).find('#calc').click(callCalc2);
		function callCalc2(){
			App.load('Calc', {'user1' : user1, 'user2' : user2});
			App.removeFromStack(1);
		}
	}
});