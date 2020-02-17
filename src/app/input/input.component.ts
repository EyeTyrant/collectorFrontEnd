import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  dieCastInputForm = new FormGroup({
    releaseYear: new FormControl(""),
    name: new FormControl(""),
    brand: new FormControl(""),
    manufacturer: new FormControl("")
  });
}
