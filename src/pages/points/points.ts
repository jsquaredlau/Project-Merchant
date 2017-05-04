import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class Points {

    public selectedPoints: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.selectedPoints = 20
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Points');
  }

}
