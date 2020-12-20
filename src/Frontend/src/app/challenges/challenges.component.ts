import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddChallengeComponent } from "./add-challenge/add-challenge.component";

@Component({
  selector: "app-challenges",
  templateUrl: "./challenges.component.html",
  styleUrls: ["./challenges.component.scss"],
})
export class ChallengesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addChallenge() {
    this.dialog.open(AddChallengeComponent);
  }
}
