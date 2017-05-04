import { Injectable } from '@angular/core';
// import { Http } from '@angular2/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BusinessDetails provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BusinessDetails {

  name: string = "BASYXLab";
  endpointUrl: string = "http://jsquared.ga:3000/api/v1/merchant";

}
