// In JavaScript, when we talk about a function inside an object, we're referring to a method — a function that's a property of an object.
const student = {
    firstName: "kapil",
    greet: function(){
        console.log(`hello my name is ${this.firstName}`)
    }
}
console.log(student.firstName)
student.greet()




const hen = {
    name : 'Helen',
    eggcount : 0,
    layegg(){
        this.eggcount++;
        console.log(this.eggcount);
    }
};


hen.layegg();
hen.layegg();
hen.layegg();
hen.layegg();


