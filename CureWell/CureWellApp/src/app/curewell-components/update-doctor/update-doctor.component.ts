import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { CurewellService } from "../../curewell-services/curewell.service";
import { Doctor } from "../../curewell-interfaces/doctor";

@Component({
  templateUrl: "./update-doctor.component.html",
})
export class UpdateDoctorComponent implements OnInit {
  doctorId: number;
  doctorName: string;
  status: boolean;
  errorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private _cureWellService: CurewellService,
    private router: Router
  ) {}

  ngOnInit() {
    //To do implement necessary logic
    this.doctorId = parseInt( this.route.snapshot.params['doctorId']);
    this.doctorName = this.route.snapshot.params['doctorName'];
  }

  editDoctorDetails(doctorname: string) {
    //To do implement necessary logic
    console.log(doctorname);
    this._cureWellService
      .editDoctorDetails(this.doctorId, doctorname)
      .subscribe(
        (success) => {
          this.status = success;
          if (this.status) {
            alert("Docter's Name updated successfully");
          } else {
            alert("Doctor's Name not updated, Some error occured");
          }
        },
        (error) => {
          this.errorMsg = error;
          alert("Some error occured");
          this.router.navigate(['/viewDoctors']);
        },
        () => {
          console.log("Updated Doctor details successfully");
          this.router.navigate(['/viewDoctors']);
        }
      );
  }
}
