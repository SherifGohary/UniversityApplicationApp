import { Component, OnInit } from '@angular/core';
import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'applicant-registration',
  templateUrl: './applicant-registration.component.html',
  styleUrls: ['./applicant-registration.component.scss']
})
export class ApplicantRegistrationComponent implements OnInit {

  constructor(private applicantService: ApplicantService) { }

  public applicantToCreate: Applicant;

  ngOnInit(): void {
    this.applicantToCreate = new Applicant();
  }

  onSubmit(form) {
    console.log(form);
    this.applicantService.AddApplicant(this.applicantToCreate).subscribe(response => {
      console.log(response);
    });
  }

}
