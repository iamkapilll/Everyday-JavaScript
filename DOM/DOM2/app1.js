const container = document.querySelector('#container');
container.style.textAlign = 'center';



const givenImages = document.querySelectorAll('#container img'); // Selecting images inside #container

// givenImages.forEach(image => {
//     image.style.width = '150px';
//     image.style.borderRadius = '50%';
// });


//this is an alternative way of for loop :

for(let image of givenImages){
    image.style.width = '150px'
    image.style.borderRadius = '50%'
}