class Human{
    constructor(){
        this.gender = 'male';
    }

    printGender(){
        console.log(this.gender);
    }

}

// extending a class, note that you can also use this method to extend an extended class

class Person extends Human{
    constructor() {
        super();
        this.name = 'Imasuen';
        this.gender = 'Male';

    }
    printName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printGender();


