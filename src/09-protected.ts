export class Animal {
  constructor(protected name: string) { }
  move() {
    console.log('moving!')
  }
  greeting() {
    return `Hello, I'm ${this.name}`;
  }
  protected doSomething() {
    console.log('yawn')
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
      console.log(`woof ${this.name}`);
    }
    this.doSomething();
  }
}

const dog = new Dog('copi copi', 'lenny');
dog.bark(1);
// dog.name = "chubby";
// dog.doSomething();
