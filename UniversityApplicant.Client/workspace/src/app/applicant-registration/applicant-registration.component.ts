import { Component, OnInit } from '@angular/core';
import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'applicant-registration',
  templateUrl: './applicant-registration.component.html',
  styleUrls: ['./applicant-registration.component.scss']
})
export class ApplicantRegistrationComponent implements OnInit {

  constructor(
    private applicantService: ApplicantService,
    private route: ActivatedRoute,
  ) { }

  public applicantId: string;
  public applicant: Applicant;
  public applicantResume: File;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.applicantId = params.get('id');
      this.applicantService.GetApplicant(this.applicantId).subscribe(response => {
        this.applicant = response;
      });
    });
    if (!this.applicantId) {
      this.applicant = new Applicant();
    }
    this.applicantResume = new File([], '');
  }

  onSubmit(form) {
    if (!this.applicantId) {
      this.applicantService.AddApplicant(this.applicant).subscribe(response => {
        console.log(response);
      });
    } else {
      this.applicantService.EditApplicant(this.applicant).subscribe(response => {
        console.log(response);
      });
    }
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.applicantResume = fileList[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.applicantResume);
      reader.onload = function () {
        this.applicant.ApplicantResume = reader.result;
      }.bind(this);
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };

    }
  }

}
