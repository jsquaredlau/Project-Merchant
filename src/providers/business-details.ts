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
    if (this.name === "BASYXLab") {
      return [
        { "name": "Coffee", "value": 8 },
        { "name": "Sandwich", "value": 15 },
        { "name": "Pastry - Sweet", "value": 10 },
        { "name": "Pastry - Savoury", "value": 15 }
      ];
    } else if (this.name === "NeikidFyre") {
      return [
        { "name": "Coffee", "value": 8 },
        { "name": "Sandwich", "value": 15 },
        { "name": "Pastry - Sweet", "value": 10 },
        { "name": "Pastry - Savoury", "value": 15 }
      ];
    } else if (this.name === "Ataraxia") {
      return [
        { "name": "Coffee", "value": 8 },
        { "name": "Sandwich", "value": 15 },
        { "name": "Pastry - Sweet", "value": 10 },
        { "name": "Pastry - Savoury", "value": 15 }
      ];
    } else {
      return null;
    }
  }

  public getSellList(): any {
    if (this.name === "BASYXLab") {
      return [
        { "name": "Croissant", "value": 10 },
        { "name": "Bruschetta", "value": 16 },
        { "name": "Coffee", "value": 4 },
        { "name": "Cinammon Scroll", "value": 5 },
        { "name": "Meat Pie", "value": 6 },
        { "name": "Muffin", "value": 4 }
      ];
    } else if (this.name === "NeikidFyre") {
      return [
        { "name": "Croissant", "value": 10 },
        { "name": "Bruschetta", "value": 16 },
        { "name": "Coffee", "value": 4 },
        { "name": "Cinammon Scroll", "value": 5 },
        { "name": "Meat Pie", "value": 6 },
        { "name": "Muffin", "value": 4 }
      ];
    } else if (this.name === "Ataraxia") {
      return [
        { "name": "Croissant", "value": 10 },
        { "name": "Bruschetta", "value": 16 },
        { "name": "Coffee", "value": 4 },
        { "name": "Cinammon Scroll", "value": 5 },
        { "name": "Meat Pie", "value": 6 },
        { "name": "Muffin", "value": 4 }
      ];
    } else {
      return null;
    }
  }



}
