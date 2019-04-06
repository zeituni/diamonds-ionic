import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService, User } from '../auth-service.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, public scanner: BarcodeScanner) {}
  user: User;

  ngOnInit(): void {
    this.user = this.auth.getUserInfo();
    if (this.user.getToken() == 'undefined') {
      this.nav.navigateForward('login');
    }
  }

  scan() {
    this.scanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }


}
