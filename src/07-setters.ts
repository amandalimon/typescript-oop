export class MyDate {
  constructor(
    public year: number = 1998,
    private _month: number = 10,
    private _day: number = 15
  ) { }

  printFormat(): string {
    const day = this.addPading(this._day);
    const month = this.addPading(this._month);

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
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  set month(value: number) {
    if (value >= 1 && value <= 12) {
      this._month = value
    } else {
      throw new Error('invalid month')
    }
  }
}


const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('run', myDate.month);
myDate.month = 78;
console.log('esto no debe aparecer', myDate.month);
