class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} make a noise.`);
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    barks(){
        console.log(`${this.name} barks`);
    }
}
let d = new Dog('Pug');
d.speak();
d.barks();