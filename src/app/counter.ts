export class CounterClass {
  value: number;
  setInterval = setInterval;

  constructor(value: number = 0) {
    this.value = value;
  }

  increment() {
    this.value += 1;
  }

  decrement() {
    let newValue = this.value - 1;
    if (newValue < 0) {
      newValue = 0;
    }
    this.value = newValue;
  }
}
