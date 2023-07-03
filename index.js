let username; // the person that logs in


username=prompt("What is your username?","");

if(!(isEscapeKeyPressed())) { // when the escape key is not pressed
	username=username.trim();
	username=username.toLowerCase();

	if(username=="admin"){
		askForPassword();
	}
	else{
		alert("Failed Login Credentials!");
	}

	}

else{ // when the escape key is pressed
	alert("CANCELLED");
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


function isEscapeKeyPressed(userInput){
	/*Verifies if the user enters the escape key during prompt
	returns true if escape key pressed , false otherwise
	parameter is input string*/

	return userInput==null; // the escape key value is null
}