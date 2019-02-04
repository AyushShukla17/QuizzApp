import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const userDetails = {
  "Username": "zolo",
  "password": "zolo_123"
}
@Injectable()
export class DatashareService {

  constructor() { }

  validateUser(username: string, password: string): Observable<any> {
    if (username === userDetails.Username && password === userDetails.password) {
      return Observable.of({ "isAuthorised": true, "username": "zolo" });
    }
    else {
      return Observable.of({ "isAuthorised": false, "username": null });
    }
  }


}
