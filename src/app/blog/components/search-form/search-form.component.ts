import { Component, OnInit, Output, EventEmitter } from "@angular/core";

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

    valueChanges.subscribe({
      next: value => {
        console.log(value);

        this.searchChange.emit(value);
      }
    });
  }

  ngOnInit() {}
}
