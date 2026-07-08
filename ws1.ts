class Animal{
    constructor(public species: string, public sound: string){
    }
    makeSound(): void {
        console.log(`The ${this.species} says ${this.sound}`);
    }
}
let animal1 = new Animal("Dog", "boo");
let animal2 = new Animal("Cat", "Meow");

animal1.makeSound();
animal2.makeSound();