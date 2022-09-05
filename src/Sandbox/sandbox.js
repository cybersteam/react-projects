//ARROW FUNCTIONS
//----------------------------
/* function sum(a, b) {
    return a + b
} */

// is the same as:
//let sum = (a, b) => a / b;
//----------------------------


class myClass{
    constructor(name){
        this.name = name
    }

    // !! this will return this functions version of this.name when this function is called in global scope
    myFunc() {
        setTimeout(() => {
            <div>
                <p>{ this.name }</p>
            </div>
        }, 100)
    }
    
    // !! this will return the classes this.name when it's called in the global scope
    myFunc2() {
        setTimeout(function () {
            <div>
                <p>{ this.name }</p>
            </div>
        }, 100)
    }
}

let myclass = new myClass('the name');

console.log(myclass.myFunc2());





