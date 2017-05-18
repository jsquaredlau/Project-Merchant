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

  private name: string;
  private endpointUrl: string;

  public getName(): string {
    return this.name;
  }

  public setName(name): void {
    this.name = name;
  }

  public setEndpointUrl(url): void {
    this.endpointUrl = url;
  }

  public getEndpointUrl(): string {
    return this.endpointUrl;
  }

  public getRedemptionList(): any {
    if (this.name === "Grids Hostel") {
      return [
        { "name": "Single room", "value": 100 },
        { "name": "Twin room", "value": 200 },
        { "name": "Double room", "value": 200 },
        { "name": "Dormitory", "value": 50 }
      ];
    } else if (this.name === "Otaru Cafe") {
      return [
        { "name": "Coffee", "value": 10 },
        { "name": "Sandwich", "value": 20 },
        { "name": "Pastry - Sweet", "value": 15 },
        { "name": "Pastry - Savoury", "value": 15 }
      ];
    } else if (this.name === "Muffin Collective") {
      return [
        { "name": "Sourdough", "value": 16 },
        { "name": "Cruffin", "value": 14 },
        { "name": "Muffin", "value": 12 },
        { "name": "Cronut", "value": 10 }
      ];
    } else {
      return null;
    }
  }

  public getSellList(): any {
    if (this.name === "Grids Hostel") {
      return [
        { "name": "Single room", "value": 50 },
        { "name": "Twin room", "value": 100 },
        { "name": "Double room", "value": 100 },
        { "name": "Dormitory", "value": 25 }
      ];
    } else if (this.name === "Otaru Cafe") {
      return [
        { "name": "Coffee", "value": 5 },
        { "name": "Sandwich", "value": 15 },
        { "name": "Pastry - Sweet", "value": 10 },
        { "name": "Pastry - Savoury", "value": 15 }
      ];
    } else if (this.name === "Muffin Collective") {
      return [
        { "name": "Sourdough", "value": 8 },
        { "name": "Cruffin", "value": 7 },
        { "name": "Muffin", "value": 6 },
        { "name": "Cronut", "value": 5 }
      ];
    } else {
      return null;
    }
  }
}
