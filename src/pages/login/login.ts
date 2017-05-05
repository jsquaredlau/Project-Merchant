import { Component } from '@angular/core';
import { BusinessDetails } from '../../providers/business-details';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { Points } from '../points/points';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [BusinessDetails, Toast]
})
export class Login {

  public name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private businessDetails: BusinessDetails, private toast: Toast) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  public login(businessName: string): void {
    console.log('hola');
    console.log(businessName);
    if (businessName === 'BASYXLab') {
      this.businessDetails.name = businessName;
      this.businessDetails.endpointUrl = "http://jsquared.ga:3000/api/v1/merchant";
      this.navCtrl.setRoot(Points);
    } else if (businessName === 'NeikidFyre') {
      this.businessDetails.name = businessName;
      this.businessDetails.endpointUrl = "http://jsquared.ga:3000/api/v1/merchant";
      this.navCtrl.setRoot(Points);
    } else if (businessName === 'Ataraxia') {
      this.businessDetails.name = businessName;
      this.businessDetails.endpointUrl = "http://jsquared.gq:3000/api/v1/merchant";
      this.navCtrl.setRoot(Points);
    } else {
      this.toast.show('Invalid business!', '3000', 'top').subscribe();
      this.name = '';
    }
  }

}