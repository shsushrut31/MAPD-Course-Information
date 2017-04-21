import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

 courses: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, angFire: AngularFire) {
  	this.courses = angFire.database.list('/mapd/teachers');

  }

}
