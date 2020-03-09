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
    const request = new HttpRequest('POST', this.baseUrl, applicant);
    return this.httpClient.request(request);
  }
}
