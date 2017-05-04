import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LaasEndpoint provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LaasEndpoint {

  constructor(public http: Http) {
    console.log('Hello LaasEndpoint Provider`');
  }

  pointDistributionRequest(business: string, fbId: string, customerAddress: string, points: number): boolean {

    return false;
  }

  pointRedemptionRequest(business: string, fbId: string, customerAddress: string, points: number): boolean {

    return false;
  }



}
