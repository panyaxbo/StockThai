import { StockService } from './../../services/stock/stock.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  SearchStockList: any;
  constructor(private router: Router,
              public _stockService: StockService) { }

  ngOnInit() {
    this.LoadStockData()
  }
  LoadStockData() {
    this._stockService.LoadStockData().subscribe(stocks => {
      console.log(stocks);
      this.SearchStockList = stocks;
    })
  }
}
