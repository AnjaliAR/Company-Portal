import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router,NavigationExtras } from '@angular/router';
import { Company } from 'src/app/portal/company.model';
import { CompanyService } from 'src/app/portal/company.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  company: Company;
  id:number;

  constructor(private companyService: CompanyService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
        this.company = this.companyService.getCompanies(this.id);
        console.log(this.company.about);
    });

}
}
