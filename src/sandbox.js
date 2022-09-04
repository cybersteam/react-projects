//ARROW FUNCTIONS

/* function sum(a, b) {
    return a + b
} */

// is the same as:
//let sum = (a, b) => a / b;

class myClass{
    constructor(name){
        this.name = name
    }
    //this will return this functions version of this.name when this function is called in globe
    myFunc() {
        setTimeout(() => {
            console.log(this.name)
        }, 100)
    }
    //this will return the classes this.name when it's called in the global scope
    myFunc2() {
        setTimeout(function () {
            console.log(this.name)
        }, 100)
    }
}

let myclass = new myClass('the name');
//myclass.myFunc();
console.log(myclass.myFunc2());

//console.log(this.name);
//console.log(sum(1000, 2) + " hey");
//sum.toString();
//let sum2 = (a,b) => a + b
//sum2.toString(45);




