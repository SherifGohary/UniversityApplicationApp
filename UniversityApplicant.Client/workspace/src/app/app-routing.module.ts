import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantsListComponent } from './applicants-list/applicants-list.component';
import { ApplicantRegistrationComponent } from './applicant-registration/applicant-registration.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';

const routes: Routes = [
  { path: 'applicants-list', component: ApplicantsListComponent },
  { path: 'register', component: ApplicantRegistrationComponent },
  { path: '', redirectTo: '/applicants-list', pathMatch: 'full' },
  { path: 'applicant/:id', component: ApplicantDetailsComponent },
  { path: 'applicant/edit/:id', component: ApplicantRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
