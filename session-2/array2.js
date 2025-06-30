const fruits = ['apple', 'banana', 'cherry']
console.log(fruits)
console.log(fruits[0])

fruits.push('orange') // add to the end of the array
console.log(fruits)
fruits.unshift('grape') // add to the beginning of the array
console.log(fruits)
fruits.pop() // remove from the end of the array
console.log(fruits)
fruits.shift()// remove from the beginning of the array
console.log(fruits)

fruits.splice(1, 2) // remove from the middle of the array, the (1,2) means start at index 1 and remove 2 elements
console.log(fruits)


let namee = 'kapil'
let result = namee.toUpperCase() // convert to uppercase
console.log('the uppercase name is:', result)