import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast, ToastOptions } from '@ionic-native/toast';
import { Headers, RequestOptions, Http } from "@angular/http";
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { BusinessDetails } from '../../providers/business-details';

/**
 * Generated class for the Redeem page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-redeem',
  templateUrl: 'redeem.html',
  providers: [Toast, BarcodeScanner]
})
export class Redeem {

  public selectedPoints: number;
  public items: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: Toast,
    private barcodeScanner: BarcodeScanner,
    private businessDetails: BusinessDetails,
    private http: Http
  ) {
    this.items = businessDetails.getRedemptionList();
  }

  ionViewDidLoad() {
    console.log(this.businessDetails.getName());
    console.log('ionViewDidLoad Points');
    this.selectedPoints = 10;
  }

  public redeemPoints(): void {
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
          this.http.post(
            this.businessDetails.getEndpointUrl() + '/' + this.businessDetails.getName() + '/points/redeem',
            {
              fbId: customerDetails.fbId,
              customerAddress: customerDetails.customerAddress,
              points: this.selectedPoints
            },
            options
          )
            .subscribe(
            (data) => {
              this.toast.show(this.selectedPoints + ' points redeemed!', '3000', 'top').subscribe();
            },
            (error) => {
              const toastOptions: ToastOptions = {
                message: 'Redemption failed!',
                duration: 2000,
                position: 'top',
                styling: {
                  opacity: 1,
                  backgroundColor: '#e12927',
                  textColor: '#FFFFFF',
                  cornerRadius: 5,
                  horizontalPadding: 10,
                  verticalPadding: 10
                }
              }

              this.toast.showWithOptions(toastOptions).subscribe();
              console.log(JSON.stringify(error));
            })
        }
      }, (err) => {
        console.log('err');
      });
  }

  public setPoints(points): void {
    if (points !== null) {
      this.selectedPoints = points;
    }
  }

}
