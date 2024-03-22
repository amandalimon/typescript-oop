export class MyDate {
  constructor(
    public year: number = 1998,
    public month: number = 10,
    private day: number = 15
  ) {}

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
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat()); // 10/07/1993

const myDate2 = new MyDate();
console.log('() =>',myDate2.printFormat()); // () => 15/10/1998

const myDate3 = new MyDate(2024);
console.log('(2024) =>', myDate3.printFormat()); // (2024) => 15/10/2024

const myDate4 = new MyDate(2024, 3);
console.log('(2024, 3) =>', myDate4.printFormat()); // (2024, 3) => 15/03/2022
