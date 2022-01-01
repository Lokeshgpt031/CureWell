import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { CurewellService } from "../../curewell-services/curewell.service";
import { Surgery } from "../../curewell-interfaces/surgery";
import { ParsedEvent } from "@angular/compiler";
import { Alert } from "selenium-webdriver";

@Component({
  templateUrl: "./update-surgery.component.html",
})
export class UpdateSurgeryComponent implements OnInit {
  doctorId: number;
  surgeryId: number;
  surgeryDate: Date;
  startTime: number;
  endTime: number;
  surgeryCategory: string;
  status: boolean;
  errorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private _cureWellService: CurewellService,
    private router: Router
  ) {}

  ngOnInit() {
    //To do implement necessary logic
    this.doctorId = parseInt(this.route.snapshot.params["doctorId"]);
    this.surgeryId = parseInt(this.route.snapshot.params["surgeryId"]);
    this.surgeryDate = new Date(this.route.snapshot.params["surgeryDate"]);
    this.startTime = parseFloat(this.route.snapshot.params["startTime"]);
    this.endTime = parseFloat(this.route.snapshot.params["endTime"]);
    this.surgeryCategory = this.route.snapshot.params["surgeryCategory"];
  }

  editSurgery(startTime: number, endTime: number) {
    //To do implement necessary logic

    console.log(typeof startTime);
    console.log(typeof endTime);
    this._cureWellService
      .editSurgery(
        this.doctorId,
        endTime,
        startTime,
        this.surgeryCategory,
        this.surgeryDate,
        this.surgeryId
      )
      .subscribe(
        (success) => {
          this.status = success;
          if (this.status) {
            alert("Surgery Details updated successfully");
            this.router.navigate(["/viewTodaySurgery"]);
          } else {
            alert("Surgery details not updated successfully");
            this.router.navigate(["/viewTodaySurgery"]);
          }
        },
        (error) => {
          this.errorMsg = error;
          alert("Some error occured");
          this.router.navigate(["/viewTodaySurgery"]);
        },
        () => {
          console.log("Updated surgery details successfully");
        }
      );
  }
}
