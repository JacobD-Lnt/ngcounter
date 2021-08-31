import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public name:string;
  public counters: Counter[] = [];
  public superCounters: Counter[] = [];
  newCounter(){
    if(this.counters.length === 3){
      let totalValue = 0;

      for(let counter of this.counters){
        totalValue+= counter.value;
      }

      while(this.counters.length > 0)
      {
        this.counters.pop();
      }

      let superCounter = new Counter(totalValue, 3);
      this.superCounters.push(superCounter);

    }
    else{
      let counter = new Counter(0, 1);
      this.counters.push(counter);
    }
    
  }
}


class Counter {
  value: number;
  addValue: number;

  constructor(value: number = 0, addValue: number = 1){
    this.value = value;
    this.addValue = addValue;
  }

  increment(){
    this.value+=this.addValue;
  }

  decrement(){
   
    let newValue = this.value - this.addValue;
    if(newValue < 0){
      newValue=0;

    }
    this.value = newValue;
  }
}
 