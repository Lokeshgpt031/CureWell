import { Component, OnInit } from '@angular/core';
import { Surgery } from '../../curewell-interfaces/surgery';
import { CurewellService } from '../../curewell-services/curewell.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Route } from '@angular/compiler/src/core';

@Component({
  templateUrl: './view-todays-surgery.component.html',
})
export class ViewTodaysSurgeryComponent implements OnInit {

  surgeryList: Surgery[];
  showMsgDiv: boolean = false;
  errorMsg: string;

  constructor(private _curewellService: CurewellService, private router: Router) { }

  ngOnInit() {
    //To do implement necessary logic
  }

  getTodaySurgery() {
    //To do implement necessary logic
  }

  editSurgery(surgery: Surgery) {
    //To do implement necessary logic
  }

}
