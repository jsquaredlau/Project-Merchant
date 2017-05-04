import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Headers, RequestOptions, Response, Http } from "@angular/http";
import { BusinessDetails } from './business-details';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the LaasEndpoint provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LaasEndpoint {

  constructor(public http: Http, private businessDetails: BusinessDetails) { }

  public pointDistributionRequest(fbId: string, customerAddress: string, points: number): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions(({ headers: headers }));
    console.log(this.businessDetails.endpointUrl + '/' + this.businessDetails.name + '/points/distribute');
    return this.http
      .post(
      this.businessDetails.endpointUrl + '/' + this.businessDetails.name + '/points/distribute',
      {
        fbId: fbId,
        customerAddress: customerAddress,
        points: points
      },
      options
      )
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  public pointRedemptionRequest(fbId: string, customerAddress: string, points: number): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions(({ headers: headers }));
    return this.http
      .post(
      this.businessDetails.endpointUrl + '/' + this.businessDetails.name + '/points/redeem',
      {
        fbId: fbId,
        customerAddress: customerAddress,
        points: points
      },
      options
      )
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error || 'Server error')); //...errors if
  }
}
