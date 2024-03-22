export class MyDate {
  constructor(
    public year: number = 1998,
    public month: number = 10,
    private _day: number = 15
  ) { }

  printFormat(): string {
    const day = this.addPading(this.day);
    const month = this.addPading(this.month);

    return `${day}/${month}/${this.year}`;
  }

  private addPading(value: number) {
    if (value < 10) {
      return `0${value}`
    } return `${value}`
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    // code
    return this._day; // siempre deben retornar algo
  }

  // getDay() {
  //   return this.day;
  // }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1993, 7, 10);
myDate.day
// myDate.day = 22 no se puede modificar
// myDate.getDay()

console.log('1993', myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7, 10);
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 7, 10);
console.log('2001', myDate3.isLeapYear);
