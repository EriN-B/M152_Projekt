import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {CookieService} from "ngx-cookie-service";
import { CommonModule } from '@angular/common';
import { PicturesComponent } from './components/pictures/pictures.component';
import { VideosComponent } from './components/videos/videos.component';
import { AudioComponent } from './components/audio/audio.component';
import { CssAnimationComponent } from './components/css-animation/css-animation.component';
import { SvgComponent } from './components/svg/svg.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'pictures', component: PicturesComponent},
  {path: 'videos', component: VideosComponent},
  {path:'audio', component: AudioComponent},
  {path:'css-animations', component: CssAnimationComponent},
  {path:'svg', component: SvgComponent},
  {path: 'animations', component: CssAnimationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PicturesComponent,
    VideosComponent,
    AudioComponent,
    CssAnimationComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
