/**
 * object 
 */

class Animal {
    constructor(val, name = ''){
        // define attribute for class 
        this.value = val; 
        this.name = name; 
    }
    show(){
        console.log(`value of class is : ${this.value} and the name is  ${this.name}`);
    }
}

class Dog extends Animal {
    constructor() {
        super('phat');
    }
}
let dog = new Dog();
dog.show();