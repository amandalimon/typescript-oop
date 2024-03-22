export class Animal {
  constructor(public name: string) { }
  move() {
    console.log('moving!')
  }
  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }
  bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
}

const cat = new Animal('tomasa')
cat.move();
console.log(cat.greeting());

const dog = new Dog('copi copi', 'lenny');
dog.move();
console.log(dog.greeting());
dog.bark(4);
console.log(dog.owner);
