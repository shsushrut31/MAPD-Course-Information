import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  courses: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, angFire: AngularFire) {
  	this.courses = angFire.database.list('/');
  	
  }

}
