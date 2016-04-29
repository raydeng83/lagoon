import {Injectable} from "angular2/core";
import {Http, Headers} from 'angular2/http';
import {Photo} from '../models/Photo';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class AddPhotoService {
  constructor (private http: Http) {}

  sendUser(photo:Photo) {
    let url = "http://localhost:8080/rest/photo/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.post(url, JSON.stringify(photo), {headers: headers1});
  }
}
