import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SectorService {

  constructor(private db: AngularFireDatabase) { }

  LoadSectorData(): FirebaseListObservable<any> {
    return this.db.list('sector');
  }
}
