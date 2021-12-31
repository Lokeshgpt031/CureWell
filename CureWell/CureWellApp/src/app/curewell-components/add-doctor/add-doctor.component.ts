import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurewellService } from '../../curewell-services/curewell.service';
import { Doctor } from '../../curewell-interfaces/doctor';
import { DoctorSpecialization } from '../../curewell-interfaces/doctorspecialization';
import { Specialization } from '../../curewell-interfaces/specialization';
import { Surgery } from '../../curewell-interfaces/surgery';
import { Router } from '@angular/router';

@Component({
  templateUrl: './add-doctor.component.html'
})
export class AddDoctorComponent implements OnInit {

  doctorId: number;
  doctorName: string;
  status: boolean;
  errorAddMsg: string;
  showDiv: boolean = false;
  msg: string;

  constructor(private _curewellService: CurewellService, private router: Router) { }

  ngOnInit() {
  }

  addDoctor(doctorName: string) {
   //To do implement necessary logic
  }

}
