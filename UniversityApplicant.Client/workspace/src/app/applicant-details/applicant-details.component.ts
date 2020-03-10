import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../applicant.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Applicant } from '../applicant';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.scss']
})
export class ApplicantDetailsComponent implements OnInit {

  constructor(
    private applicantService: ApplicantService,
    private route: ActivatedRoute,
  ) { }

  public applicantId: string;
  public applicant: Applicant;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.applicantId = params.get('id');
      this.applicantService.GetApplicant(this.applicantId).subscribe(response => {
        this.applicant = response;
      });
    });
  }

}
