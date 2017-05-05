import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { Headers, RequestOptions, Http } from "@angular/http";
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
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
  providers: [Toast, BarcodeScanner]
})
export class Points {

  public selectedPoints: number;
  public items: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: Toast,
    private barcodeScanner: BarcodeScanner,
    public businessDetails: BusinessDetails,
    private laasEndpoint: LaasEndpoint,
    private http: Http,
  ) {
    this.items = businessDetails.getSellList();
  }

  ionViewDidLoad() {
    console.log(this.businessDetails.getName());
    console.log('ionViewDidLoad Points');
    this.selectedPoints = 10;
  }

  public distributePoints(): void {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions(({ headers: headers }));
    const barcodeOptions: BarcodeScannerOptions = {
      preferFrontCamera: true,
      showFlipCameraButton: true
    }

    this.barcodeScanner.scan(barcodeOptions)
      .then((barcodeData) => {
        if (barcodeData.cancelled) {
          return;
        }
        const customerDetails = JSON.parse(barcodeData.text);
        if (customerDetails.fbId !== null && customerDetails.customerAddress !== null) {
          this.http.post(                                                                               // Post request:
            this.businessDetails.getEndpointUrl() + '/' + this.businessDetails.getName() + '/points/distribute',  // - URL
            {                                                                                           // - Payload
              fbId: customerDetails.fbId,
              customerAddress: customerDetails.customerAddress,
              points: this.selectedPoints
            },
            options                                                                                     // - Options
          )
            .subscribe(                                                                                 // Post Response:
            (data) => {                                                                                 // - Data
              this.toast.show(this.selectedPoints + ' points earned!', '3000', 'top').subscribe();
            },
            (error) => {                                                                                // - Error
              console.log(JSON.stringify(error));
            })
        }
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
