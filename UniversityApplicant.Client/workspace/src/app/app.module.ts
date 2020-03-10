import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';
import { ApplicantRegistrationComponent } from './applicant-registration/applicant-registration.component';
import { ApplicantsListComponent } from './applicants-list/applicants-list.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantRegistrationComponent,
    ApplicantsListComponent,
    ApplicantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    FormsModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
