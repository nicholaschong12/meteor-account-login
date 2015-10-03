Template.register.events({
	'submit form':function(e){
		e.preventDefault();
		var usernameVar = event.target.registerUsername.value;
		var emailVar = $(".registerEmail").val();
		var passwordVar = $(".registerPassword").val();
		Accounts.createUser({
			username: usernameVar,
			email: emailVar,
			password: passwordVar
		})
	}
});

Template.login.events({
	"submit form":function(e){
		e.preventDefault();
		var usernameVar = event.target.loginUsername.value;
		var passwordVar = $(".loginPassword").val();
		Meteor.loginWithPassword(usernameVar, passwordVar);
	}
});

Template.dashboard.events({
	'click .userLogout': function(e){
		e.preventDefault();
		Meteor.logout();
	}
})