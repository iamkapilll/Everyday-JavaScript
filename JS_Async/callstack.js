const multiply = (x,y) => (x*y);

const square = (x) => (x*x);

function isrightAngleTriangle(a,b,c) {
    return (square(a) + square(b) === square(c));
}


const result = isrightAngleTriangle(3,4,5)

console.log(result)

// What is the Call Stack?
// The call stack is a data structure used by JavaScript (and many other programming languages) to keep track of function calls — which function is currently running and what should run next.

// How it works:
// When a function is called, JavaScript pushes that function onto the call stack.

// The function runs.

// If that function calls another function, that new function is pushed on top of the stack.

// When a function finishes, it is popped off the stack.

// The control goes back to the function below it in the stack.