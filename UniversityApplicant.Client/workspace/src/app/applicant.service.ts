import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
