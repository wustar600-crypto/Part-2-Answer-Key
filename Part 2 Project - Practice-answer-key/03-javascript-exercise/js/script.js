// Task:  Implement a validateRegisterForm function based on JavaScript, which verifies and checks the input user data in the registration  interface. The checking rules include:
// 1. Check if the username contains spaces
// 2. Check if the password length is at least 6 characters
// 3. Check if the password matches the confirmation password
// 4. Check email format
// 5. If all verifications pass, return True


function validateRegisterForm() {  
	console.log("cccccccc");
    var username = document.getElementById('username').value;  
    var password = document.getElementById('password').value;  
    var confirmPassword = document.getElementById('confirmPassword').value;  
    var email = document.getElementById('email').value;  
  

    if (/\s/.test(username)) {  
        alert('The username cannot contain spaces！');  
        return false;  
    }  
  
    // Task: Check if the password length is at least 6 characters
	// your code here
    if (password.length < 6) {  
        alert('Check if the password length is at least 6 characters！');  
        return false;  
    }  
  
    // Task: Check if passwords match
	// your code here
    if (password !== confirmPassword) {  
        alert('Password and confirmation password do not match！');  
        return false;  
    }  
  
   
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    if (!emailRegex.test(email)) {  
        alert('Please enter a valid email address！');  
        return false;  
    }  
  
    // If all verifications pass, you can submit the form or take other actions
    // Here, simply return true to allow form submission
    return true;  
}



// Task:  Implement a validateLoginForm function based on JavaScript, which verifies and checks the input user data on the login interface. The checking rules include:
// 1. Check if the username is empty
// 2. Check if the password is empty
// 3. Check if the password length is at least 6 characters
// 4. If all verifications pass, return True

function validateLoginForm() {  
	var username = document.getElementById('username').value;  
    var password = document.getElementById('password').value;  
	if (username.trim() === '') {  
        alert('The username cannot be empty！');  
        return false;  
    }  
	
	// Task： Check if the password is empty
	// your code here
	if (password.trim() === '') {  
        alert('Password cannot be empty！');  
        return false;  
    }  
	
	 // Task: Check if the password length is at least 6 characters
	// your code here
    if (password.length < 6) {  
        alert('Check if the password length is at least 6 characters！');  
        return false;  
    }  
	
    // If all verifications pass, you can submit the form or take other actions
	// Here, simply return true to allow form submission
	// Note: In real-world applications, you should send data to the server for verification through AJAX or form submission
    return true;  
}
