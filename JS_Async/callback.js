// const delayedColor = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext(); // first it will see the doNext is defined or not, if it is defined then it will call the function doNext
//     }, delay);
// }


// delayedColor('red', 1000, ()=>{
//     delayedColor('orange', 1000, ()=>{
//         delayedColor('yellow', 1000, ()=>{
//             delayedColor('green', 1000, ()=>{
//                 delayedColor('blue', 1000, ()=>{
//                     delayedColor('indigo', 1000, ()=>{
//                         delayedColor('violet', 1000);
//                     });
//                 });
//             });
//         });
//     });
// }) 



// the above code was make with the callback function but it is not a good way to write the code because it is very hard to read and understand thats why it is called as callback hell
// instead of this will use the promise to make it more readable and understandable

