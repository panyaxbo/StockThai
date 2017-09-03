import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor(private db: AngularFireDatabase) { }
  LoadStockData(): FirebaseListObservable<any> {
    return this.db.list('stock');
  }
}
