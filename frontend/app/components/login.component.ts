import {Component} from 'angular2/core';
import {Observable}  from 'rxjs/Observable';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login.component.html'
})
export class Login {
  private model = {'username':'', 'password':''};
  private token;
  private users=[];

  constructor (private loginService: LoginService){}

  onSubmit() {
    this.loginService.sendCredential(this.model).subscribe(
      data => {
                this.token = JSON.parse(JSON.stringify(data))._body;
                this.loginService.sendToken(this.token).subscribe(
                  data => this.users = JSON.parse(JSON.parse(JSON.stringify(data))._body),
                  error => console.log(error)
                );
              },
      error => console.log(error)
    );


  }
}
