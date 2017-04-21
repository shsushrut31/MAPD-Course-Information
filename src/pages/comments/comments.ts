import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2'

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class Comments {

  comments: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, angFire: AngularFire, public alrtctrl: AlertController) {
  	this.comments = angFire.database.list('/mapd/comments');

  }

  addNote() {
    
    
    let popup = this.alrtctrl.create({
      title: 'Add Comment',
      inputs: [
        {
          name: 'name',
          placeholder: "Enter Your Name"
        },
         {
          name: 'title',
          placeholder: "Enter Comment"
        },
         ],
          buttons: [
            {
              text: "Cancel",
              handler: data => {
                console.log("Cancel Clicked");
              }
            },
            {
              text: "Save",
              handler: data => {
                this.comments.push({
                  name: data.name,
                  title: data.title,
                })
              }
            }
          ]
       
     
    });
    popup.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Comments');
  }

}
