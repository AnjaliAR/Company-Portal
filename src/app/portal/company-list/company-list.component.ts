import { Component, Input, OnInit } from '@angular/core';
import { Company  } from 'src/app/portal/company.model';
import { CompanyService } from 'src/app/portal/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies:Company[];
  
  constructor(private companyService:CompanyService) { 
    this.companies=this.companyService.getCompany();
  }
  
  ngOnInit(): void {

  }

}
