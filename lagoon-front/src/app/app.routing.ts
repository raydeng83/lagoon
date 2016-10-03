import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './components/home.component';
import { ImageDetail }  from './components/image-detail.component';
import { Login }  from './components/login.component';
import { MyAlbum }  from './components/my-album.component';
import { Register }  from './components/register.component';
import { AddPhoto }  from './components/add-photo.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'image-detail/:id',
    component: ImageDetail
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'my-album',
    component: MyAlbum
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'add-photo',
    component: AddPhoto
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);