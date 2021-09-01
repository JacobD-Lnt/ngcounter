import { Component, OnInit, Output, Input } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { SuperCounterClass } from "../superCounter";

@Component({
  selector: "super-counters",
  templateUrl: "./super-counters.component.html",
  styleUrls: ["./super-counters.component.css"],
})
export class SuperCountersComponent implements OnInit {
  @Input() counter: SuperCounterClass;

  ngOnInit(): void {}
}
