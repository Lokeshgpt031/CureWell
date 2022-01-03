import { Component, OnInit, DoCheck } from "@angular/core";
import { Doctor } from "../../curewell-interfaces/doctor";
import { CurewellService } from "../../curewell-services/curewell.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Route } from "@angular/compiler/src/core";

@Component({
  templateUrl: "./view-doctor.component.html",
})
export class ViewDoctorComponent implements OnInit {
  doctorList: Doctor[];
  showMsgDiv: boolean = false;
  doctorId: number;
  errorMsg: string;
  status: boolean;

  constructor(
    private _curewellService: CurewellService,
    private router: Router
  ) { }

  ngOnInit() {
    //To do implement necessary logic
    this.getDoctor();
  }

  getDoctor() {
    //To do implement necessary logic
    this._curewellService.getDoctors().subscribe(
      (success) => {
        this.doctorList = success;

        this.showMsgDiv = false;
      },
      (error) => {
        this.doctorList = null;
        this.errorMsg = error;
      },
      () => {
        console.log("Doctors Fetched Successfully");
      }
    );
  }

  editDoctorDetails(doctor: Doctor) {
    //To do implement necessary logic
    this.router.navigate([
      "/editDoctorDetails",
      doctor.doctorId,
      doctor.doctorName,
    ]);
  }

  removeDoctor(doctor: Doctor) {
    //To do implement necessary logic
    this._curewellService.deleteDoctor(doctor).subscribe(
      (success) => {
        if (success) {

          alert('doctor name deleted'); this.ngOnInit();
        }
        else {
          alert('Doctor name not deleted'); this.ngOnInit();
        }
      },
      (error) => { console.log("Some error occured") },
      () => { console.log("Method executed") }
    );
  }
}
