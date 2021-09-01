import { Component, OnInit, Output, Input } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { SuperDuperCounterClass } from "../superDuperCounter";

@Component({
  selector: "super-duper-counters",
  templateUrl: "./super-duper-counters.component.html",
  styleUrls: ["./super-duper-counters.component.css"],
})
export class SuperDuperCountersComponent implements OnInit {
  @Input() counter: SuperDuperCounterClass;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  public buttonText: string = "start";

  public activate() {
    this.counter.startTimer();
    this.buttonText = ":)";
  }

  notifyParent() {
   this.notify.emit("counters");
  }
}
