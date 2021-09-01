export class SuperCounterClass {
  value: number;
  addValue: number;
  setInterval = setInterval;

  constructor(value: number = 0) {
    this.value = value;
  }

  increment() {
    this.value += 3;
  }

  decrement() {
    let newValue = this.value - 3;
    if (newValue < 0) {
      newValue = 0;
    }
    this.value = newValue;
  }

  //   secondsIncrement() {
  //     this.value = this.value + 1;
  //   }

  //   setIntrvl() {
  //     this.clicked = true;
  //     setInterval(() => this.secondsIncrement(), 1000);
  //   }
}
