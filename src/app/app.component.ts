import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { CounterClass } from "./counter";
import { SuperCounterClass } from "./superCounter";
import { SuperDuperCounterClass } from "./superDuperCounter";
import { CountersComponent } from "./counters/counters.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public name: string;

  public counters: CounterClass[] = [];
  public superCounters: SuperCounterClass[] = [];
  public superDuperCounters: SuperDuperCounterClass[] = [];

  createCounter() {
    //console.log("Create counter: ", child);
    if (this.counters.length === 3) {
      // write code here
      let totalValue = 0;

      for (let counter of this.counters) {
        totalValue += counter.value;
      }

      while (this.counters.length > 0) {
        this.counters.pop();
      }

      let superCounter = new SuperCounterClass(totalValue);
      this.superCounters.push(superCounter);

      if (this.superCounters.length === 3) {
        let superDuperValue = 0;

        for (let superCounter of this.superCounters) {
          superDuperValue += superCounter.value;
        }
        while (this.superCounters.length > 0) {
          this.superCounters.pop();
        }
        let superDuperCounter = new SuperDuperCounterClass(superDuperValue);
        this.superDuperCounters.push(superDuperCounter);
      }
    } else {
      let counter = new CounterClass(0);
      this.counters.push(counter);
    }
  }

  // public counters: Counter[] = [];
  // public superCounters: Counter[] = [];
  // public superDuperCounters: Counter[] = [];

  //   newCounter(){
  //     if(this.counters.length === 3){
  //       let totalValue = 0;

  //       for(let counter of this.counters){
  //         totalValue+= counter.value;
  //       }

  //       while(this.counters.length > 0)
  //       {
  //         this.counters.pop();
  //       }

  //       let superCounter = new Counter(totalValue, 3);
  //       this.superCounters.push(superCounter);
  //       if(this.superCounters.length === 3){
  //         this.upgradeCounter();
  //       }
  //     }
  //     else{
  //       let counter = new Counter(0, 1);
  //       this.counters.push(counter);

  //     }
  //   }

  //   upgradeCounter(){
  //     if(this.superCounters.length === 3){
  //       let superValue = 0;

  //       for(let superCounter of this.superCounters){
  //         superValue += superCounter.value;
  //       }
  //       while(this.superCounters.length > 0){
  //         this.superCounters.pop();
  //       }
  //       let superDuperCounter = new Counter(superValue, 3);
  //       this.superDuperCounters.push(superDuperCounter);
  //     }
  //     else{
  //       let counter = new Counter(0, 1);
  //       this.counters.push(counter);
  //     }
  //   }
}
