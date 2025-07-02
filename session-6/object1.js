const person = {
    firstname: 'kapil',
    lastname: 'dev',
    age: 21,
    greet: function(){
        console.log("hello my name is ", this.firstname, this.lastname, "and i am ", this.age, "years old")
    }
}
person.greet()
console.log(person.firstname)






const student = {
    firstName: 'kapil',
    lastName: 'dev',
    strength: ['music','cricket'],
    exams:{
        midterms: 'A',
        finals: 'A+'
    }
};
console.log(student.firstName);
console.log(student.exams.midterms);