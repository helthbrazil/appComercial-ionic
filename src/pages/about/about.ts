import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  public titulo: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
    public statusBar: StatusBar) {
  }


  openEmailSuporte() {
    //   MailUtil.openEmail("suportedsm@intergado.com.br");
  }

  callToIntergado() {
    //  this.callUtil.callNumber('3125651151', false);
  }

  openEmailIntergado() {
    //  MailUtil.openEmail("contato@intergado.com.br");
  }

  linkToFacebook() {
    this.openWindow("http://www.facebook.com/intergado");
  }

  linkToYoutube() {
    this.openWindow("http://www.youtube.com/intergado");
  }

  linkToSite() {
    this.openWindow("http://www.intergado.com.br");
  }

  openWindow(url: string) {
    window.open(url, '_system');
  }

  ionViewDidLoad() {
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
    });
    this.titulo = "Equipe de Software";
    console.log('ionViewDidLoad AboutPage');
    this.statusBar.backgroundColorByHexString('#0b3e5b');
  }

}
