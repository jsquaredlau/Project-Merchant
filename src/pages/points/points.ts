import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';

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
  providers: [Toast]
})
export class Points {

  public selectedPoints: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: Toast) {
    this.selectedPoints = 20
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Points');
  }

  distributePoints(): void {
    console.log('IT HASNT CRASHED');
    this.toast.show('Im a toast', '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
}
