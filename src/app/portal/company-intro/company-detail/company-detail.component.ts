import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Company } from '../../company.model';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  

  constructor(private companyService: CompanyService, private route : ActivatedRoute) { }
  
  ngOnInit(): void {
   
  }

}
