import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  map,
  filter,
  distinctUntilChanged,
  debounceTime
} from "rxjs/operators";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  queryForm = new FormGroup({
    type: new FormControl("post"),
    query: new FormControl("batman")
  });

  @Output()
  searchChange = new EventEmitter<string>();

  constructor() {
    console.log(this.queryForm);

    const valueChanges = this.queryForm.get("query").valueChanges;

    // https://rxmarbles.com/
    valueChanges
      .pipe(
        debounceTime(400),
        map(v => v.trim()),
        filter(v => v.length >= 3),
        distinctUntilChanged(),
      )
      .subscribe({
        next: value => {
          this.searchChange.emit(value);
        }
      });
  }

  ngOnInit() {}
}
