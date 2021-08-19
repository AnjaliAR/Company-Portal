import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { NgStyle } from '@angular/common';
import { $ } from 'protractor';

@Component({
  selector: 'app-company-intro',
  templateUrl: './company-intro.component.html',
  styleUrls: ['./company-intro.component.scss']
})
export class CompanyIntroComponent implements OnInit {
  id:number;
  company:Company;
  backGroundStyle: any;
  constructor(private companyService: CompanyService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
        this.company = this.companyService.getCompanies(this.id);
        this.backGroundStyle = {
          'background-image' : `url(${this.company.profilePic})`,
          'height' : '230px',
          'background-size': 'cover',
           'background-repeat': 'no-repeat'
        }
      });
  }

}
