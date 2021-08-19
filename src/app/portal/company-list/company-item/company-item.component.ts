
import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../company.model';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {
  @Input() index: number;
  @Input() company: Company;
  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
  }

}
