import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
// import { ZBar, ZBarOptions } from '@ionic-native/zbar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BusinessDetails } from '../../providers/business-details';
import { LaasEndpoint } from '../../providers/laas-endpoint';

/**
 * Generated class for the Points page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-points',
  templateUrl: 'points.html',
  providers: [Toast, BarcodeScanner, BusinessDetails]
})
export class Points {

  public selectedPoints: number;
  public items: any = [
    { "name": "Croissant", "value": 10 },
    { "name": "Bruschetta", "value": 16 },
    { "name": "Coffee", "value": 4 },
    { "name": "Cinammon Scroll", "value": 5 },
    { "name": "Meat Pie", "value": 6 },
    { "name": "Muffin", "value": 4 }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: Toast, private barcodeScanner: BarcodeScanner, private businessDetails: BusinessDetails, private laasEndpoint: LaasEndpoint) { }

  ionViewDidLoad() {
    console.log(this.businessDetails.name);
    console.log('ionViewDidLoad Points');
  }

  public distributePoints(): void {
    console.log('IT HASNT CRASHED');
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData.format);
      console.log(barcodeData.cancelled);
      console.log(barcodeData.text);
      console.log(JSON.parse(barcodeData.text).name);
      const customerDetails = JSON.parse(barcodeData.text);
      if (customerDetails.fbId !== null && customerDetails.customerAddress !== null) {
        this.laasEndpoint.pointDistributionRequest(customerDetails.fbId, customerDetails.customerAddress, this.selectedPoints)
          .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          })
      }
      // Scan barcode
      // Check correct information is available
      // - fbId
      // - customerAddress
      // Call the api jsquared.ga/api/v1/merchant/:business/points/distribute POST
      // If 200
      // then fire toast turn off loading dial
      // else
      // Say it was a failure and try again

      // this.toast.show('Im a toast', '5000', 'center').subscribe(
      //   toast => {
      //     console.log(toast);
      //   }
    }, (err) => {
      console.log(err);
    });
  }

  public setPoints(points): void {
    if (points !== null) {
      this.selectedPoints = points;
    }
  }
}
