import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Comments } from './comments';

@NgModule({
  declarations: [
    Comments,
  ],
  exports: [
    Comments
  ]
})
export class CommentsModule {}
