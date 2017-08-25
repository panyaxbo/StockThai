import { SectorService } from './../../services/sector/sector.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  SearchSectorList: any;
  constructor(private router: Router,
              public _sectorService: SectorService) { }

  ngOnInit() {
    this.LoadSectorData();
  }
  LoadSectorData() {
    this._sectorService.LoadSectorData().subscribe(sectors => {
      console.log(sectors);
      this.SearchSectorList = sectors;
    });
  }
}
