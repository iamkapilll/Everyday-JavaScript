// function insidefun(){
//     let num = 10
// }
// insidefun()
// console.log(num) // this will throw an error because num is not defined oustside the function\\\\





// let totalEggs = 0
// function countEggs(){
//     totalEggs = 5
// }
// countEggs()
// console.log(totalEggs) // this will print 1 because totalEggs is defined outside the function and is modified inside the function

// let heroes = ['superman', 'batman', 'spiderman']
// function cryForheores(){
//     for(let hero of heroes){
//         console.log(`please help us ${hero}`)
//     }
// }
// cryForheores() // this will print the heroes in the array






// function is sent as an argument in a function 

// function calltwice(func){
//     func();
//     func();
// }

// function laugh(){
//     console.log('hahahahahhhhahaha');
// }

// calltwice(laugh);  





//return function example

// function returnFunction(){
//     const rand = Math.random()
//     if(rand <0.5){
//         return function(){
//             console.log("hey its a return function and its heads", rand)
//         };
//     }
//     else{
//         return function(){
//             for(let i = 0; i<5; i++){
//                 console.log(`hey its a return function and its tails ${rand} and this is the ${i+1}th time`);
//             }
//         };
//     }
// }

// const myFunction = returnFunction();
// myFunction()



// function and objects

// const math = {
//     multiply: function(a,b){
//         return a*b
//     },
//     divide: function(a,b){
//         if(b === 0){
//             return 'cannot divide by zero'
//         }
//         else{
//             return a/b
//         }
//     },
//     add: function(a,b){
//         return a+b
//     },
//     subtract: function(a,b){
//         return a-b
//     }
// }

// console.log(math.multiply(10,5))
// console.log(math.add(50,50))