import {Component, Input} from 'angular2/core';
import {NavBar} from './nav-bar.component';
import {Photo} from '../models/photo';
import {PhotoService} from '../services/photo.service';
import {ImageComments} from './image-comments.component';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'image-detail',
  templateUrl: 'app/components/image-detail.component.html',
  directives: [ImageComments]
})
export class ImageDetail {
  photo: Photo;
  like: string;
  user: User;

  constructor ( private _photoService: PhotoService, private _userService: UserService, private _routeParams: RouteParams){}

  goBack() {
    window.history.back();
  }

  ngOnInit() {
    let id = this._routeParams.get('id');
    this.photo=this._photoService.getPhotoById(id);
    this.user=this._userService.getUserById(this.photo.userId);

    if (this.user.liked.filter(photoId => photoId == this.photo.photoId)[0]) {
      this.like="Unlike";
    } else {
      this.like="Like";
    }
  }

  likeDisplay() {
    if (this.like =="Like") {
      this.like="Unlike";
      this.photo.likes+=1;
      this.user.liked.push(this.photo.photoId);
    } else {
      this.like="Like";
      this.photo.likes-=1;
      var index = this.user.liked.indexOf(this.photo.photoId, 0);
      if (index > -1) {
        this.user.liked.splice(index, 1);
      }
    }
  }
}
