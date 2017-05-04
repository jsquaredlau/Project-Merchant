import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Headers, RequestOptions, Response, Http } from "@angular/http";
import { BusinessDetails } from './business-details';
import 'rxjs/add/operator/map';

/*
  Generated class for the LaasEndpoint provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LaasEndpoint {

  constructor(public http: Http, private businessDetails: BusinessDetails) {
    console.log('Hello LaasEndpoint Provider`');
  }

  public pointDistributionRequest(fbId: string, customerAddress: string, points: number): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions(({ headers: headers }));
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
      .map(this.extractData)
      .catch(this.handleError);
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
      .map(this.extractData)
      .catch(this.handleError);
  }


  // public deployRewardMile(form): Observable<any> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions(({ headers: headers }));
  //   console.log(form);
  //   return this.http
  //     .post(
  //     this.businessDetails.endpointUrl + '/' + form.owner + '/' + 'rewardMile' + '/' + form.schemeName + '/' + 'deploy',
  //     {
  //       owner: form.owner,
  //       requestedPartner: form.requestedPartner,
  //       schemeName: form.schemeName,
  //       contractType: form.contractType,
  //       description: form.description,
  //       instructions: form.instructions,
  //       requiredInputs: form.requiredInputs,
  //       vaultAddress: form.vaultAddress,
  //       ownerRewardAllocation: form.ownerRewardAllocation,
  //       partners: form.partners
  //     },
  //     options
  //     )
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }


}
