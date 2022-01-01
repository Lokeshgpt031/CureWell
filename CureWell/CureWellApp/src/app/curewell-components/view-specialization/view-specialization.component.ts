import { Component, OnInit } from "@angular/core";
import { Specialization } from "../../curewell-interfaces/specialization";
import { CurewellService } from "../../curewell-services/curewell.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Route } from "@angular/compiler/src/core";
import { Doctor } from "../../curewell-interfaces/doctor";

@Component({
  templateUrl: "./view-specialization.component.html",
})
export class ViewSpecializationComponent implements OnInit {
  specializationList: Specialization[];
  showMsgDiv: boolean = false;
  errorMsg: string;

  constructor(
    private _curewellService: CurewellService,
    private router: Router
  ) {}

  ngOnInit() {
    //To do implement necessary logic
    this.getSpecialization();
   
    
  }

  getSpecialization() {
    //To do implement necessary logic
    this._curewellService.getAllSpecializations().subscribe(
      (success) => {
        this.specializationList = success;
        console.log('list',this.specializationList);
        
      },
      (error) => {
        this.specializationList = null;
        this.errorMsg = error;
        this.showMsgDiv = true;
        alert("Some Error Occured")
      },
      () => {
        console.log("Specialization Fetched Successfully");
      }
    );
  }
}
