import { EconomicService } from './../../services/economic/economic.service';
import { Component, OnInit } from '@angular/core';
declare let d3: any;
@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./economic.component.css']
})
export class EconomicComponent implements OnInit {

  dateArr: Array<any> = [];
  valArr: Array<any> = [];
  values: Array<any> = [];
// Config for linechart ng2-chart
  lineChartData: Array<any> = [];
  lineChartLabels: Array<any> = [];
  data1: Array<any> = [];
  data2: Array<any> = [];
  data3: Array<any> = [];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  lineChartReady: boolean = false;
  public lineChartOptions: any = {
    responsive: true
  };
  constructor(public _economicService: EconomicService) { }
  ngOnInit() {
    this.data1 =  [65, 59, 80, 81, 56, 55, 40];
    this.data2 =  [28, 48, 40, 19, 86, 27, 90];
    this.data3 =  [18, 48, 77, 9, 100, 27, 40];
    this.lineChartData = [
      {data: this.data1, label: 'Series A'},
      {data: this.data2, label: 'Series B'},
      {data: this.data3, label: 'Series C'}
    ];
    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    // this.options = {
    //   chart: {
    //     type: 'lineChart',
    //     height: 450,
    //     margin : {
    //       top: 20,
    //       right: 20,
    //       bottom: 40,
    //       left: 55
    //     },
    //     x: function(d){ return d['x']; },
    //     y: function(d){ return d['y']; },
    //     useInteractiveGuideline: true,
    //     xAxis: {
    //       axisLabel: 'Date'
    //     },
    //     yAxis: {
    //       axisLabel: 'Price',
    //       tickFormat: function(d){
    //         return d3.format('.02f')(d);
    //       },
    //       axisLabelDistance: -10
    //     }
    //   }
    // };
    this._economicService.LoadEconomicData().subscribe(result => {
  //    this.oillist = data.dataset;
 //     console.log(this.oillist);
    //  this.data = data.dataset.data;
      for (let i = 0; i < result.dataset.data.length; i++) {
        let value = result.dataset.data[i];
        //  this.values.push({
      //      'x' : value[0], 'y' : value[1]
      //    });

        this.dateArr.push(value[0]);
        this.valArr.push(value[1]);
      }
      this.values = [{ data: this.valArr, label: 'OIL'}];
   //   console.log(this.values);
    //  console.log(this.dateArr.length);
   //   console.log(this.lineChartData);
      this.lineChartReady = true;
    //  this.data = [{ values: this.values }];
     // console.log(this.valArr);
    });
  }
}
