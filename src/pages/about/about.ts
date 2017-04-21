import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	courses1: FirebaseListObservable<any>;
	courses2: FirebaseListObservable<any>;

 	constructor(public navCtrl: NavController, angFire: AngularFire) {
  	this.courses1 = angFire.database.list('/mapd/courses/semester1');
  	this.courses2 = angFire.database.list('/mapd/courses/semester2');

  }

}
