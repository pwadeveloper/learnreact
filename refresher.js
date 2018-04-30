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


//spread and rest operator
// spread for arrays
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

//spread for objects
const individual = {
    name: 'Imasuen'
};

const newPerson = {
    ...individual,
    age: 28
}

console.log(newPerson);

// rest operator
const filter = (...args) =>{
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3));

// Destructuring
// allows you to extract array elements
//or object proprties and store them in variables
const numbers = [1,2,3];
[num1, , num3] = numbers;
console.log(num1, num3)

const {name, age} = {name:'Max', age:28}
console.log(name)
console.log(age)