import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth-service.service';

//import {HttpModule} from '@angular/http';

import {HttpClientModule} from '@angular/common/http'

import {StreamingMedia} from '@ionic-native/streaming-media/ngx';

import {EmailComposer} from '@ionic-native/email-composer/ngx';

import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    StreamingMedia,
    EmailComposer,
    BarcodeScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
