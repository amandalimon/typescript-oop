abstract class Pet {
  constructor(protected name: string) {}
  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

class Cat extends Pet {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }
  purrr(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`meow ${this.name}`);
    }
  }
}

// const dog = new Pet('caribe');
const cat = new Cat('Egg', 'Amanda')
