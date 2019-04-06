import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'play-video', loadChildren: './play-video/play-video.module#PlayVideoPageModule' },
  { path: 'send-email', loadChildren: './send-email/send-email.module#SendEmailPageModule' },
  { path: 'scan', loadChildren: './scan/scan.module#ScanPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
