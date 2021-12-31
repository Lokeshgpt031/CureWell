import { Injectable } from "@angular/core";
import { Doctor } from "../curewell-interfaces/doctor";
import { DoctorSpecialization } from "../curewell-interfaces/doctorspecialization";
import { Specialization } from "../curewell-interfaces/specialization";
import { Surgery } from "../curewell-interfaces/surgery";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CurewellService {
  doctorList: Doctor[];
  surgeryList: Surgery[];
  specializationList: Specialization[];
  doctorSpecializationList: DoctorSpecialization[];

  constructor(private http: HttpClient) {}

  //GetDoctor
  getDoctors(): Observable<Doctor[]> {
    //To do implement necessary logic
    let tempVar = this.http
      .get<Doctor[]>("http://localhost:50476/api/CureWell/GetDoctors")
      .pipe(catchError(this.errorHandler));
    return tempVar;
  }

  //GetSpecialization
  getAllSpecializations(): Observable<Specialization[]> {
    let tempVar = this.http
      .get<Specialization[]>(
        "http://localhost:50476/api/CureWell/GetSpecializations"
      )
      .pipe(catchError(this.errorHandler));
    return tempVar;
  }

  //GetSurgeries
  getAllSurgeriesForToday(): Observable<Surgery[]> {
    //To do implement necessary logic
    let tempVar = this.http
      .get<Surgery[]>(
        "http://localhost:50476/api/CureWell/GetAllSurgeryTypeForToday"
      )
      .pipe(catchError(this.errorHandler));
    return tempVar;
  }

  //AddDoctor
  addDoctor(doctorName: string): Observable<boolean> {
    //To do implement necessary logic
    let docObj: Doctor;
    docObj = { doctorId: 0, doctorName: doctorName };
    let tempVar = this.http
      .post<boolean>("http://localhost:50476/api/CureWell/AddDoctor", docObj)
      .pipe(catchError(this.errorHandler));
    return tempVar;
  }

  //EditDoctor
  editDoctorDetails(doctorId: number, doctorName: string): Observable<boolean> {
    //To do implement necessary logic
    let docObj: Doctor;
    docObj = { doctorId: doctorId, doctorName: doctorName };
    console.log(docObj);
    console.log(typeof doctorId);

    let tempVar = this.http
      .put<boolean>(
        "http://localhost:50476/api/CureWell/UpdateDoctorDetails",
        docObj
      )
      .pipe(catchError(this.errorHandler));
    return tempVar;
  }

  //editSurgery
  editSurgery(
    doctorId: number,
    endTime: number,
    startTime: number,
    surgeryCategory: string,
    surgeryDate: Date,
    surgeryId: number
  ): Observable<boolean> {
    //To do implement necessary logic

    let surObj: Surgery;
    surObj = {
      doctorId: doctorId,
      endTime: endTime,
      startTime: startTime,
      surgeryCategory: surgeryCategory,
      surgeryDate: surgeryDate,
      surgeryId: surgeryId,
    };

    let tempVar = this.http
      .put<boolean>("http://localhost:50476/api/CureWell/UpdateSurgery", surObj)
      .pipe(catchError(this.errorHandler));
    return tempVar;
  }

  //RemoveDoctor
  deleteDoctor(doctor: Doctor) {
    //To do implement necessary logic

    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      body: doctor,
    };
    let tempVar = this.http
      .delete<boolean>(
        "http://localhost:50476/api/CureWell/DeleteDoctor",
        httpOptions
      )
      .pipe(catchError(this.errorHandler));
    return tempVar;
  }

  //ErrorHandler
  errorHandler(error: HttpErrorResponse) {
    //To do implement necessary logic
    console.error(error);

    return throwError(error.message || "ERROR");
  }
}
