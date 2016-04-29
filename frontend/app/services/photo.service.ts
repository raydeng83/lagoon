import {Injectable} from 'angular2/core';
import {Photo} from '../models/photo';
import {Http, Headers} from 'angular2/http';
import {User} from '../models/user';



@Injectable()
export class PhotoService {

  constructor (private http:Http){}

  getPhotos() {
      let url = "http://localhost:8080/photo/allPhotos";
      return this.http.get(url);
  }

  getPhotoById (id: string) {

  }

  getPhotosByUser (user: User) {
    let tokenUrl1 = "http://localhost:8080/rest/photo/user";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
  }
}
