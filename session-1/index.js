let age = prompt("Enter your age:");
// prompt is like string so to convert it to number we use parseInt
age = parseInt(age);

if (age >= 20) {
    console.log('You are an adult and you can vote');
} else if (age < 18) {
    console.log('You cannot vote');
} else {
    console.log('You can vote but are not yet 20');
}
