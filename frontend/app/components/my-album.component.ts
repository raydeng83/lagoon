import {Component, Input} from 'angular2/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {Photo} from '../models/photo';
import {Router} from 'angular2/router';
import {GlobalService} from '../services/global.service';

@Component({
  selector: 'my-album',
  templateUrl: 'app/components/my-album.component.html'
})
export class MyAlbum {

  private user: User;
  private selectedPhoto: Photo;

  constructor (_userService: UserService, private _router: Router, globalService: GlobalService) {
    this.user=_userService.getUserByName(localStorage.getItem("currentUserName"));
  }

  onSelect(photo:Photo) {
    this.selectedPhoto = photo;
    this._router.navigate(['ImageDetail', {id: this.selectedPhoto.photoId}]);
  }
}
