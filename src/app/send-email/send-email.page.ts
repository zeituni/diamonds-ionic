import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.page.html',
  styleUrls: ['./send-email.page.scss'],
})
export class SendEmailPage implements OnInit {

  name: string;
  phone: string;
  email: string;

  constructor(private emailComposer: EmailComposer) { }

  sendEmail() {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        console.log('available');
      }
     });
     
     let email = {
       to: 'max@mustermann.de',
       cc: 'erika@mustermann.de',
       bcc: ['john@doe.com', 'jane@doe.com'],
       attachments: [
         'file://img/logo.png',
         'res://icon.png',
         'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
         'file://README.pdf'
       ],
       subject: 'Your Video From Helzberg',
       body: 'Hi, This is your jewellry video from Helzberg',
       isHtml: true
     }
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }

  ngOnInit() {
    
  }

}
