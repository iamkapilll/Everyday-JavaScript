function greet(){
    console.log('hello world')
}
greet() //call the function



function add(a,b){
    return a+b
}
console.log(add(2,3))


function display(){
    console.log("hello world");

    return 'i am superman'; // the reuturn statement terminates the function and doesnot print the next to it.

    console.log("i am not going to executed "); // this line will not be executed because the function has already returned a value
}

let message = display();
console.log(message);



let num1 = Math.sqrt(16) // this will return the square root of 16
console.log(num1)

let num2 = Math.pow(2,3)
console.log(num2) // this will return 2 to the power of 3, which is 8

// let random = Math.floor(Math.random() *10)+1 // this will return a random number between 1 and 10
// console.log(random) // this will return a random number between 1 and 10



let array = [2,3,4,5]
console.log(array)

function addElements(arr){
    arr.unshift(1) // add 1 to the beginning of the array
}

addElements(array) // call the function to add 1 to the beginning of the array
console.log(array)


function cointoss(){
    let random = Math.random()
    console.log(random)
    if(random < 0.5){
        console.log("heads") 
    }
    else{
       console.log("tails")
        
    }
}

cointoss()