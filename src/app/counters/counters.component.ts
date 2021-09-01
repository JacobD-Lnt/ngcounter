import { Component, OnInit, Output, Input } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { CounterClass } from "../counter";

@Component({
  selector: "counters",
  templateUrl: "./counters.component.html",
  styleUrls: ["./counters.component.css"],
})
export class CountersComponent implements OnInit {
  //@Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() counter: CounterClass;

  ngOnInit(): void {}

  // notifyParent() {
  //   this.notify.emit("counters");
  // }
}
