import { IndustryService } from './../../services/industry/industry.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  SearchIndustryList: any;
  constructor(private router: Router,
              public _industryService: IndustryService) { }

  ngOnInit() {
    this.LoadIndustryData();
  }
  LoadIndustryData() {
    this._industryService.LoadIndustryData().subscribe(industries => {
      console.log(industries);
      this.SearchIndustryList = industries;
    });
  }
}
