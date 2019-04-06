
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
//import {HTTP} from '@ionic-native/http/ngx';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {map} from 'rxjs/operators';
import { LoginPage } from './login/login.page';
import { strict } from 'assert';
import { stringify } from '@angular/core/src/render3/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';

export class User {
  username: string;
  token: string;
 
  constructor(name: string, password: string) {
    this.username = name;
    this.token = password;
  }
  
  getUserName() {
    return this.username;
  }

  getToken() {
    return this.token;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
  
  constructor (public http: HttpClient) {

  }

  public login(username: string, password: string) {
    console.log('Credentials: ' + username + '/' + password);
    let jsonData: any; 
    if (username === null || password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        console.log('going to server to authenticate: http://107.22.3.17:8080/auth/login?username=' + username + '&password=' + password);
        this.http.post('http://107.22.3.17:8080/auth/login?username=' + username + '&password=' + password, {}, {})
        .subscribe(data => {
        console.log(JSON.stringify(data));
        jsonData = JSON.stringify(data);
        jsonData.parse();
        this.currentUser = new User(jsonData.username, jsonData.token);
      });
      console.log('Passed login');
      observer.next(jsonData != 'undefined');
      observer.complete();
      });
    }
  }

 
  public getUserInfo() : User {
    return this.currentUser;
  }

}