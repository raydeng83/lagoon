import {Component} from 'angular2/core';
import {Observable}  from 'rxjs/Observable';
import {LoginService} from '../services/login.service';
import {GlobalService} from '../services/global.service';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login.component.html'
})
export class Login {
  private model = {'username':'', 'password':''};
  private token;
  private login=false;
  private currentUserName;


  constructor (private loginService: LoginService, private globalService: GlobalService){
  }

  onSubmit() {
    this.loginService.sendCredential(this.model).subscribe(
      data => {
                this.token = JSON.parse(JSON.stringify(data))._body;
                this.loginService.sendToken(this.token).subscribe(
                  data => {
                            this.login=true;
                            this.currentUserName=this.model.username;
                            localStorage.setItem("currentUserName", this.model.username);
                          },
                  error => console.log(error)
                );
              },
      error => console.log(error)
    );
  }
}
