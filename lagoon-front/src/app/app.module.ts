import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }              from './app.routing';

import { AppComponent } from './app.component';
import {AddPhoto} from './components/add-photo.component';
import {HomeComponent} from './components/home.component';
import {ImageComments} from './components/image-comments.component';
import {ImageDetail} from './components/image-detail.component';
import {Login} from './components/login.component';
import {MyAlbum} from './components/my-album.component';
import {NavBar} from './components/nav-bar.component';
import {PhotoList} from './components/photo-list.component';
import {PhotoRow} from './components/photo-row.component';
import {Register} from './components/register.component';
import {SidePanel} from './components/side-panel.component';

import {AddPhotoService} from './services/add-photo.service';
import {CommentService} from './services/comment.service';
import {LoginService} from './services/login.service';
import {PhotoService} from './services/photo.service';
import {RegisterService} from './services/register.service';
import {UploadPhotoService} from './services/upload-photo.service';
import {UserService} from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    AddPhoto,
    HomeComponent,
    ImageComments,
    ImageDetail,
    Login,
    MyAlbum,
    NavBar,
    PhotoList,
    PhotoRow,
    Register,
    SidePanel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AddPhotoService, 
    CommentService, 
    LoginService, 
    PhotoService, 
    RegisterService, 
    UploadPhotoService, 
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
