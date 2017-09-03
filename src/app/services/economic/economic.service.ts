import { environment } from './../../../environments/environment.prod';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class EconomicService {

  constructor(private http: Http) { }
  LoadEconomicData(): Observable<any> {
    const url = 'https://www.quandl.com/api/v3/datasets/OPEC/ORB.json';
    // tslint:disable-next-line:whitespace
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }

  LoadFundamentalData() {
  //  pms_xMk9Ly8vj_FTJxsb
    // tslint:disable-next-line:max-line-length

    const url = 'https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=AAPL&qopts.columns=ticker,dimension,datekey,revenue&api_key=' + environment.quandl.apiKey;
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }
}
