import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicant } from './applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl: string = "http://localhost:11898/api/Applicants"

  public GetAllApplicants(): Observable<Applicant[]> {
    return this.httpClient.get<Applicant[]>(this.baseUrl);
  }

  public AddApplicant(applicant: Applicant): Observable<HttpEvent<Applicant>> {
    const formData: FormData = new FormData();
    formData.append('Fname', applicant.Fname);
    formData.append('Lname', applicant.Lname);
    formData.append('Email', applicant.Email);
    formData.append('BirthDate', JSON.stringify(applicant.BirthDate));
    formData.append('Country', applicant.Country);
    formData.append('City', applicant.City);
    formData.append('Address', applicant.Address);
    formData.append('Gender', JSON.stringify(applicant.Gender));
    formData.append('PhoneNo', applicant.PhoneNo);
    formData.append('MaritalStatus', JSON.stringify(applicant.MaritalStatus));
    formData.append('SchoolName', applicant.SchoolName);
    formData.append('GraduationYear', JSON.stringify(applicant.GraduationYear));
    formData.append('Grade', JSON.stringify(applicant.Grade));
    // formData.append('ApplicantResume', applicant.ApplicantResume);

    const request = new HttpRequest('POST', this.baseUrl + "/AddApplicant", applicant);
    return this.httpClient.request(request);
  }
}
