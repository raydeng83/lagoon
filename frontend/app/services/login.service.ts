import {Injectable} from "angular2/core";
import {Http, Headers} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LoginService {
  constructor (private http: Http) {}

  sendCredential(model) {
    let tokenUrl1 = "http://localhost:8080/user/login";
    let headers1 = new Headers({'Content-Type': 'application/json'});
    return this.http.post(tokenUrl1, JSON.stringify(model), {headers: headers1});
  }

  sendToken(token) {
    let tokenUrl2 = "http://localhost:8080/rest/user/users";
    console.log('Bearer '+token);

    let getHeaders = new Headers({'Authorization':'Bearer '+token});

    return this.http.get(tokenUrl2, {headers: getHeaders})
  }

}
