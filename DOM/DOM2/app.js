const allLinks = document.querySelectorAll('a')
for(let link of allLinks){
    link.innerText = 'this is link'// this will first select every links and make them manipulate as " i am a link"

    //here we can also do some style to this links as:
    link.style.color = 'red'
    link.style.backgroundColor = 'yellow'
}





document.querySelector('h2').innerHTML = 'This is changed from the vusual studio code'// this will change the first comming h2 with the written content in the innerhtml




//253 styling these selectors and ...
const h1 = document.querySelector('h1')
h1.style.color = 'magenta'
h1.style.fontSize = '5em'
h1.style.border = '5px solid black'

// window.getComputedStyle(h1)






const purple = document.querySelector('.purple')




//class list with get and set attributes:
const div = document.querySelector('.purple')
div.getAttribute('class')
div.setAttribute('class','border')//we successfully changed the attribute of class to border


div.classList.add('purple')
div.classList.remove('purple')
// div.classList.contains('purple')//this will sures that if there is purple available or not
div.classList.toggle('red')//this will toggle as true and false everytime it runs







//256 creating new element and using it with append

const newImage = document.createElement('img')
newImage.src = 'https://images.unsplash.com/photo-1740487092927-d6e9d14373cb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
document.body.appendChild(newImage)// at this moment the newimage is pasted in the last part of the body of html but the size of the newinage is not maintained and it is shown as big
newImage.classList.add('rectangle')//this rectangle is a class that has given some sort of css in the css as maintained width and height for the image
  




//As we have created the new image with the help of createElement, we can also make new thins as:

const newh1 = document.createElement('h1')
newh1.innerText = 'i am new h1'
document.body.appendChild(newh1)
newh1.setAttribute('class','border')//as we can also give the border also with using js as from given predefoned css



//we can add some text to the selected paragraph as using append :
const p = document.querySelector('p')
p.append('i have just added some text to the first selected paragraph using append')



























