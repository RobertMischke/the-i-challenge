import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddCoachComponent } from "./add-coach/add-coach.component";

@Component({
  selector: "app-coaches",
  templateUrl: "./coaches.component.html",
  styleUrls: ["./coaches.component.scss"],
})
export class CoachesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addCoach() {
    this.dialog.open(AddCoachComponent);
  }
}
