import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'applicants-list',
  templateUrl: './applicants-list.component.html',
  styleUrls: ['./applicants-list.component.scss']
})
export class ApplicantsListComponent implements OnInit, OnDestroy {

  constructor(private applicantService: ApplicantService) { }

  applicantSub: Subscription;
  public allApplicants: Applicant[];

  ngOnInit(): void {
    this.applicantSub = this.applicantService.GetAllApplicants().subscribe(response => {
      this.allApplicants = response;
      console.log(response);
    });
  }

  log() {
    console.log("log");
  }

  ngOnDestroy(): void {
    this.applicantSub.unsubscribe();
  }

}
