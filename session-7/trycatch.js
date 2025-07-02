function yell(msg) {
    try {

        console.log(msg.toUpperCase().repeat(3));


    } catch (e) {
        console.log("please pass a string next time");
    }
}
// yell(2);// this will throw an error because 2 is not a string
yell("hello world");









function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        let result = a / b;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.log(` Error: ${error.message}`);
    }
}

// Test cases
divide(10, 2);  // Output: Result: 5
divide(5, 0);   // Output: Error: Cannot divide by zero
