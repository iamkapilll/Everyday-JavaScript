let password = prompt("Enter your password:");
if (password.length < 10 || password.indexOf(' ') !== -1) { // check if password is less than 10 characters or contains spaces
    alert('Password must be at least 10 characters long and must not contain spaces');
} else {
    alert('Password is valid');
}


const age = 100;
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("INVALID AGE!")
}