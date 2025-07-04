const li = document.querySelectorAll('li')

li.forEach((lii) =>{
    lii.classList.toggle('highlight')
});

//we can even do as :

// li.forEach((lii) =>{
//     lii.classList.add('highlight')// this will add class highlight and make color blue to all
// });

// li.forEach((lii) =>{
//     lii.classList.remove('highlight')// this will remove class highlight and make color cyan to all
// });


li.forEach((lii) =>{
    lii.classList.add('border')//we can also add border using javascript
});

li.forEach((lii) =>{
    lii.classList.add('hover')
})