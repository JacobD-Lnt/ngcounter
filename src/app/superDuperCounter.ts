

export class SuperDuperCounterClass {
  value: number;
  addValue: number;
  setInterval = setInterval;
  clicked = false;
  countersNeeded = 0;
  countersMade = 0;

  constructor(value: number = 0) {
    this.value = value;
  }

  secondsIncrement() {
    this.value = this.value + 1;
    if(this.value % 20 === 0){
      this.countersNeeded++;
    }
  }
  
  startTimer() {
    this.clicked = true;
    setInterval(() => this.secondsIncrement(), 1000);
  }

  
}
