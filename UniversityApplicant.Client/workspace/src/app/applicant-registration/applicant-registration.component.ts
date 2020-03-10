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
  public applicantResume: File;

  ngOnInit(): void {
    this.applicantToCreate = new Applicant();
    this.applicantResume = new File([], '');
  }

  onSubmit(form) {
    console.log(form);
    this.applicantService.AddApplicant(this.applicantToCreate).subscribe(response => {
      console.log(response);
    });
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.applicantResume = fileList[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.applicantResume);
      reader.onload = function () {
        this.applicantToCreate.ApplicantResume = reader.result;
      }.bind(this);
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };

    }
  }

}
