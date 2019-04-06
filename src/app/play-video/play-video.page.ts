import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.page.html',
  styleUrls: ['./play-video.page.scss'],
})
export class PlayVideoPage implements OnInit {

  constructor(private navController: NavController, private streamingMedia: StreamingMedia) { }

  sendEmail() {
    this.navController.navigateForward('send-email');
  }

  ngOnInit() {
    let options: StreamingVideoOptions = {
      orientation: 'portrait',
      shouldAutoClose: false
    }
    this.streamingMedia.playVideo('https://s3.amazonaws.com/ttc-diamonds/Helzberg/11111.mp4', options);

  }

  startVideo() {
    let options: StreamingVideoOptions = {
      orientation: 'portrait',
      shouldAutoClose: false
    }
    this.streamingMedia.playVideo('https://s3.amazonaws.com/ttc-diamonds/Helzberg/11111.mp4', options);
  }

}
