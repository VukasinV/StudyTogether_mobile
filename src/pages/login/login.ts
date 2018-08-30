import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { ApiService } from "../../services/api.service";
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(forma: NgForm) {
    this.api.login(forma.value.username, forma.value.password).subscribe(
      data => {
        localStorage.setItem('token', data.toString());
        this.navCtrl.setRoot(HomePage);
      }, 
      error => {

    });
  }

}
