import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { CompanyIntroComponent } from './portal/company-intro/company-intro.component';
import { CompanyDetailComponent } from './portal/company-intro/company-detail/company-detail.component';
import { CompanyListComponent } from './portal/company-list/company-list.component';
import { MyNetwrokComponent } from './my-netwrok/my-netwrok.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { StartComponent } from './portal/start/start.component';
import { Company } from './portal/company.model';
import { CompanyService } from './portal/company.service';
import { CompanyItemComponent } from './portal/company-list/company-item/company-item.component';
import { OverviewComponent } from './portal/company-intro/company-detail/overview/overview.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PortalComponent,
    CompanyIntroComponent,
    CompanyDetailComponent,
    CompanyListComponent,
    MyNetwrokComponent,
    JobOffersComponent,
    MyProfileComponent,
    StartComponent,
    CompanyItemComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
