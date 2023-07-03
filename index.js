let username; // the person that logs in


username=prompt("What is your username?","");
username=username.trim();
username=username.toLowerCase();

if(username=="admin"){
	askForPassword();
}
else{
	alert("Failed Login Credentials!");
}



function askForPassword(){
	/*Verifies the user entered password, returns null and takes no parameters */

	let password; // the password that is entered
	password=prompt("Enter your password","");
	if(password=="TheMaster"){
		alert("WELCOME!");
	}
	else if(password.length==0){
		alert("CANCELLED!");
	}
	else{
		alert("Wrong Password!");
	}
}