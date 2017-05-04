import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Redeem } from './redeem';

@NgModule({
  declarations: [
    Redeem,
  ],
  imports: [
    IonicPageModule.forChild(Redeem),
  ],
  exports: [
    Redeem
  ]
})
export class RedeemModule {}
