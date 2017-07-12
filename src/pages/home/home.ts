import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public titulo = "Home";
  items: Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = new Array<string>();
    this.initItems();
  }

  initItems() {
    for (let i = 0; i < 10000; i++) {
      this.items.push("" + i);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
