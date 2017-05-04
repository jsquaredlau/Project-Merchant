import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
// import { ZBar, ZBarOptions } from '@ionic-native/zbar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: Toast, private barcodeScanner: BarcodeScanner) {
    this.selectedPoints = 20
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Points');
  }

  distributePoints(): void {
    console.log('IT HASNT CRASHED');
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData.format);
      console.log(barcodeData.cancelled);
      console.log(barcodeData.text);
    }, (err) => {
      console.log(err);
    });
    // this.toast.show('Im a toast', '5000', 'center').subscribe(
    //   toast => {
    //     console.log(toast);
    //   }
    // );
    //   let zBarOptions: ZBarOptions = {
    //     flash: 'off',
    //     drawSight: false
    //   };
    //
    //   this.zbar.scan(zBarOptions)
    //     .then(result => {
    //       console.log(result); // Scanned code
    //     })
    //     .catch(error => {
    //       console.log(error); // Error message
    //     });
    // }
  }
}
