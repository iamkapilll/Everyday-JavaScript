const animals = ['ant', 'bison', 'camel', 'duck', 'elephant','cat','dog'];


let sliced = animals.slice(2, 5); // slice the array from index 2 to index 5 (not including index 5)
// The slice method does not change the original array, it returns a new array
console.log(animals) // original array
console.log(sliced)

let spliced = sliced.splice(1, 1); // splice the array from index 1 and remove 1 element
console.log(spliced)


let number = [3,6,5,2,8,9,1,]
let sorted = number.sort()
console.log(sorted) // sort the array in ascending order
let reversed = number.reverse() // reverse the array
console.log(reversed) // reverse the array