import {Component} from 'angular2/core';
import {HomeComponent} from './components/home.component';
import {UserService} from './services/user.service';
import {PhotoService} from './services/photo.service';
import {MockUsers} from './data/mock-users';
import {MockPhotos} from './data/mock-photos';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ImageDetail} from './components/image-detail.component'
import {NavBar} from './components/nav-bar.component';
import {Login} from './components/login.component';
import {LoginService} from './services/login.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import {MyAlbum} from './components/my-album.component';
import {GlobalService} from './services/global.service';
import {Register} from './components/register.component'
import {RegisterService} from './services/register.service';

@Component({
    selector: 'my-app',
    providers:[UserService, PhotoService, MockUsers, MockPhotos, ROUTER_PROVIDERS, HTTP_PROVIDERS, LoginService, GlobalService, RegisterService],
    directives: [HomeComponent, ROUTER_DIRECTIVES, NavBar, Login, MyAlbum, Register],
    templateUrl: 'app/app.component.html'
})
@RouteConfig([
  {path: '/home', name: 'Home', component: HomeComponent, useAsDefault:true},
  {path: '/image-detail/:id', name: 'ImageDetail', component: ImageDetail},
  {path: '/login', name: 'Login', component:Login},
  {path: '/my-album', name: 'MyAlbum', component:MyAlbum},
  {path: '/register', name: "Register", component: Register}
])
export class AppComponent {
}
