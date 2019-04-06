import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService, User } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  ngOnInit(): void {
    
  }
  
  username: string;
  password: string;

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) {}

  login() {
    console.log('in login; username: ' + this.username);
    this.auth.login(this.username, this.password).subscribe(allowed => {     
      if (allowed) {        
        this.nav.navigateForward('home');
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        
      });

  }

  async showError(text) {
    
    const alert = await this.alertCtrl.create({
      header: 'Login Failure',
      subHeader: '',
      message: text,
      buttons: ['OK']
    });
    
    return await alert.present();
  }
  

}
