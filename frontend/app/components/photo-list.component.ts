import {Component} from 'angular2/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {Photo} from '../models/photo';
import {Router} from 'angular2/router';

@Component({
  selector: 'photo-list',
  templateUrl: 'app/components/photo-list.component.html'
})
export class PhotoList {
  users: User[];
  selectedPhoto: Photo;

  constructor (_userService: UserService, private _router: Router) {
    _userService.getUsers().then(users => this.users=users);
  }

  onSelect(photo:Photo) {
    this.selectedPhoto = photo;
    this._router.navigate(['ImageDetail', {id: this.selectedPhoto.photoId}]);
  }
}
