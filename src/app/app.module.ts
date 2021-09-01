import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { CountersComponent } from "./counters/counters.component";
import { SuperCountersComponent } from "./super-counters/super-counters.component";
import { SuperDuperCountersComponent } from "./super-duper-counters/super-duper-counters.component";

@NgModule({
  declarations: [
    AppComponent,

    CountersComponent,
    SuperCountersComponent,
    SuperDuperCountersComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
