import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {GlobalService} from '../services/global.service';

@Component({
  selector: 'nav-bar',
  directives: [ROUTER_DIRECTIVES],
  templateUrl:'app/components/nav-bar.component.html'
})
export class NavBar{

  login:string = "Login";

  constructor (private globalService: GlobalService) {
  }

  loginToggle() {
    if (localStorage.getItem("currentUserName")=='') {
      this.login="Login";
    } else {
      this.login="Logout";
    }
  }

}
