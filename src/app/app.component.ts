import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { CounterClass } from "./counter";
import { SuperCounterClass } from "./superCounter";
import { SuperDuperCounterClass } from "./superDuperCounter";
import { CountersComponent } from "./counters/counters.component";
import { ColossalCounterClass } from "./colossalCounter";

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
  public colossalCounters: ColossalCounterClass[] = [];
  public checkingSuperDuper = false;
  public che

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
        if(this.checkingSuperDuper === false){
          this.checkingSuperDuper = true;
          setInterval(() => this.superDuperUpdate(), 10);

        }
      
        //Colossal counter
        if (this.superDuperCounters.length === 3) {
          let colossalValue = 0;
  
          for (let superDuperCounter of this.superDuperCounters) {
            colossalValue += superDuperCounter.value;
          }
          while (this.superDuperCounters.length > 0) {
            this.superDuperCounters.pop();
          }
          let colossalCounter = new ColossalCounterClass(colossalValue);
          this.colossalCounters.push(colossalCounter);
        }

      }
    } else {
      let counter = new CounterClass(0);
      this.counters.push(counter);
    }
  }

  superDuperUpdate(){
    for(let counter of this.superDuperCounters){
      if(counter.countersNeeded > counter.countersMade){
        counter.countersMade += 1;
        this.createCounter();
      }
    }

    for(let counter of this.colossalCounters){
      if(counter.countersNeeded > counter.countersMade){
        counter.countersMade += 1;
        this.createCounter();
      }
    }

  }

}
