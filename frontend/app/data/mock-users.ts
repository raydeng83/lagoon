import {User} from '../models/user';
import {Photo} from '../models/photo';
import {Injectable} from 'angular2/core';
import {PhotoService} from '../services/photo.service';

@Injectable()
export class MockUsers{
  photos: Photo[];
  users: User[];

  constructor(
    _photoService: PhotoService
  ) {
    this.photos=_photoService.getPhotos();
    this.users=[
      {"userId":"user1", "firstName":"John", "lastName": "Adams", "userName": "JAdams", "password":"password", "joinDate": "04/16/2016", "photos":[this.photos[0], this.photos[2]], "liked": ["photo1"]},
      {
      "userId" : "user2", "firstName" : "Ben", "lastName":"Franklin", "userName" : "BFranklin", "password" : "password", "joinDate" : "03/27/2016", "photos" : [this.photos[1], this.photos[4]], "liked": []
    },{
      "userId" : "user3", "firstName" : "Tom", "lastName":"Jefferson", "userName" : "TJefferson", "password" : "password", "joinDate" : "03/27/2016", "photos" : [this.photos[3], this.photos[5],this.photos[6]], "liked": []
    }
    ];
  }

  getUsers() {
    return this.users;
  }
}
