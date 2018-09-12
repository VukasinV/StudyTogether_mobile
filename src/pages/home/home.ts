import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TokenService } from '../../services/token.service';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private tokenService: TokenService) {

  }

  ionViewDidLoad(){
    if(this.tokenService.getToken===null){
      this.navCtrl.push(SignupPage);
    }else{
      console.log("Bravo bebo");
    }
  }
}
