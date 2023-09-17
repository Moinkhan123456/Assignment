class Department{
    constructor(classes){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} class.`);
    }
}
class Employee extends Department{
    constructor(name){
        super(name);
    }
    child(){
        console.log(`${this.name} class.`);
    }
}
let d = new Employee('Moin');
d.parent();
d.child();
