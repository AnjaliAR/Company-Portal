import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company.model';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
  providers: [CompanyService]
})
export class PortalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
