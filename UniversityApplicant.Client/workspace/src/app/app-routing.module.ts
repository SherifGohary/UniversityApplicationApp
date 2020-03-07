import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantsListComponent } from './applicants-list/applicants-list.component';
import { ApplicantRegistrationComponent } from './applicant-registration/applicant-registration.component';

const routes: Routes = [
  { path: 'applicants-list', component: ApplicantsListComponent },
  { path: 'register', component: ApplicantRegistrationComponent },
  { path: '', component: ApplicantsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
