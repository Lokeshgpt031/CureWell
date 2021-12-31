import { Injectable } from '@angular/core';
import { Doctor } from '../curewell-interfaces/doctor';
import { DoctorSpecialization } from '../curewell-interfaces/doctorspecialization';
import { Specialization } from '../curewell-interfaces/specialization';
import { Surgery } from '../curewell-interfaces/surgery';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurewellService {

  doctorList: Doctor[];
  surgeryList: Surgery[];
  specializationList: Specialization[];
  doctorSpecializationList: DoctorSpecialization[];

  constructor(private http: HttpClient) { }
  
  //GetDoctor
  getDoctors(): Observable<Doctor[]> {
    //To do implement necessary logic
    return null;
  }

  //GetSpecialization
  getAllSpecializations(): Observable<Specialization[]> {
   //To do implement necessary logic
    return null;
  }

  //GetSurgeries
  getAllSurgeriesForToday(): Observable<Surgery[]> {
    //To do implement necessary logic
    return null;
  }

  //AddDoctor
  addDoctor(doctorName: string): Observable<boolean> {
    //To do implement necessary logic
    return null;
  }

  //EditDoctor
  editDoctorDetails(doctorId: number, doctorName: string): Observable<boolean> {
    //To do implement necessary logic
    return null;
  }

  //editSurgery
  editSurgery(doctorId: number, endTime: number, startTime: number, surgeryCategory: string, surgeryDate: Date, surgeryId: number): Observable<boolean> {
    //To do implement necessary logic
    return null;
  }

  //RemoveDoctor
  deleteDoctor(doctor: Doctor) {
    //To do implement necessary logic
    return null;
  }

  //ErrorHandler
  errorHandler(error: HttpErrorResponse) {
    //To do implement necessary logic
    return throwError(error.message || 'ERROR')

  }

}
