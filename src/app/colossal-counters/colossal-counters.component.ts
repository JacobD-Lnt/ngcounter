import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { ColossalCounterClass } from "../ColossalCounter";

@Component({
  selector: 'app-colossal-counters',
  templateUrl: './colossal-counters.component.html',
  styleUrls: ['./colossal-counters.component.css']
})
export class ColossalCountersComponent implements OnInit {
  @Input() counter: ColossalCounterClass;
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
