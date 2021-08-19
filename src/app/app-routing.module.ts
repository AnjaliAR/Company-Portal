import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { CompanyIntroComponent } from './portal/company-intro/company-intro.component';
import { CompanyDetailComponent } from './portal/company-intro/company-detail/company-detail.component';
import { CompanyListComponent } from './portal/company-list/company-list.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyNetwrokComponent } from './my-netwrok/my-netwrok.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { StartComponent } from './portal/start/start.component';
import { OverviewComponent } from './portal/company-intro/company-detail/overview/overview.component';
import { CanactivateGuard } from './canactivate.guard';

const routes: Routes = [
  {
    path: 'company',
    component: PortalComponent,
    children: [
      { path: '', component: StartComponent },
      {
        path: ':id',
        component: CompanyIntroComponent,
        children: [{ path: 'overview', component: OverviewComponent }],
      },
    ],
  },
  { path: 'myprofile', component: MyProfileComponent, canActivate:[CanactivateGuard] },
  { path: 'mynetwrok', component: MyNetwrokComponent },
  { path: 'joboffers', component: JobOffersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
