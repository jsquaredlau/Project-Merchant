import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Points } from './points';

@NgModule({
  declarations: [
    Points,
  ],
  imports: [
    IonicPageModule.forChild(Points),
  ],
  exports: [
    Points
  ]
})
export class PointsModule {}
