import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicantService } from './applicant.service';
import { Subscription } from 'rxjs';
import { Applicant } from './applicant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() { }

  title = 'workspace';


  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }
}
