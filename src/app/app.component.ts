import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  // changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = "programator-angular";
  subtitle = "Lubię placki!";
  counter = 0;

  constructor(cdr:ChangeDetectorRef) {
    setInterval(() => {
      this.counter++;

      // cdr.detectChanges()
    }, 500);
  }
}
