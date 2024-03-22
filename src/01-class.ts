const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1998, 9, 15);
date.getHours();
date.getTime();
date.toISOString();

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2024, 2, 21);
console.log(MyDate);
// MyDate { year: 2024, month: 2, day: 21 }
