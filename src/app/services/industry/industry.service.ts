import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class IndustryService {

  constructor(private db: AngularFireDatabase) { }
  LoadIndustryData(): FirebaseListObservable<any> {
    return this.db.list('intustry');
  }
}
