console.log('js math.pi', Math.PI);
console.log('js math.max', Math.max(24, 19, 100));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item);
  }
}

console.log('MyMath.PI', MyMath.PI)
console.log('MyMath.max', MyMath.max(2, 3, 8, 5, 10))

const numbers = [21, 84, 131, 30, 7]
console.log('MyMath.max', MyMath.max(...numbers))
console.log('MyMath.max', MyMath.max(-3, -12, -1, -9))
