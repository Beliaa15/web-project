function check() {
	var password = document.getElementById("txtPassword").value;
	var confirmPassword = document.getElementById("txtConfirmPassword").value;
	if (password != confirmPassword) {
		alert("Passwords do not match.");
		return false;
	}
	return true;
}

function validate () {
	var y = document.getElementById("txtPassword").value;
	var check = true;
	if (y.length != 8) {
		alert("Your password must be 8 characters")
		check=false;
	} else if (y.search(/[a-z]/) < 0) {
		alert("Your password needs a lower case letter")
		check=false;
	} else if (y.search(/^[A-Z]/) < 0) {
		alert("Your password must start with an uppser case letter")
		check=false;
	} else if (y.search(/[0-9]/) < 0) {
		alert("Your password needs a number")
		check=false;
	} else if(/\s/g.test(y)){
		alert("Your password must not contain whitespaces")
		check=false;
	}else if(y.search(/[!@#$%^&*]/) < 0){
		alert("Your password must contain special character")
		check=false;
	}
	return check;
}

function numer () {
	var x = document.getElementById("nemra").value;
	if (validatePhoneNumber(x)) {
		return true;
		// no is OK
	}else {
		alert("Invalid Phone Number")
		return false;
	}
}

function validatePhoneNumber(input_str) {
	var re = /^\d{11}$/
	return re.test(input_str);
}

function validateForm() {
    var isFormValid = true;
    isFormValid &= validate();
    isFormValid &= numer();
    isFormValid &= check();
    return isFormValid? true:false;
}

