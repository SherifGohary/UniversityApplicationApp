import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicantService } from './applicant.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private applicantService: ApplicantService) { }

  title = 'workspace';
  applicantSub: Subscription;

  ngOnInit(): void {
    this.applicantSub = this.applicantService.GetAllApplicants().subscribe(response => {
      console.log(response);
    });
  }

  ngOnDestroy(): void {
    this.applicantSub.unsubscribe();
  }
}
