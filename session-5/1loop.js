let cars = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda'];
let text = ''
for (let i = 0; i < cars.length; i++) {
    text = text + cars[i] + "<br>"; 
}

document.getElementById('hello').innerHTML = text;