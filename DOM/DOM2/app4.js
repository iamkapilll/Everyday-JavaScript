const container = document.querySelector('#container')

for(let i = 0; i < 100; i++){
    const button = document.createElement('button')
    button.innerText = `button ${i + 1}`
    container.appendChild(button)
    //insted of this we can do is :
    // document.body.appendChild(button)


}


let elements = document.getElementsByClassName('myClass')

for(let j = 0; j < elements.length; j++){
    elements[j].innerHTML = 'this is my new text'
}
