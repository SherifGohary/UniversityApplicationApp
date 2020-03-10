import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpParams } from '@angular/common/http';
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

  public GetApplicant(id: string): Observable<Applicant> {
    return this.httpClient.get<Applicant>(this.baseUrl + "/" + id);
  }

  public AddApplicant(applicant: Applicant): Observable<HttpEvent<Applicant>> {
    const request = new HttpRequest('POST', this.baseUrl + "/AddApplicant", applicant);
    return this.httpClient.request(request);
  }

  public EditApplicant(applicant: Applicant): Observable<HttpEvent<Applicant>> {
    const request = new HttpRequest('PUT', this.baseUrl + '/EditApplicant', applicant);
    return this.httpClient.request(request);
  }

  public DeleteApplicant(id: string): Observable<Applicant> {
    return this.httpClient.delete<Applicant>(this.baseUrl + "/" + id);
  }
}
