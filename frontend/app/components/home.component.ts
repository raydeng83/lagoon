import {Component} from 'angular2/core';
import {PhotoList} from './photo-list.component';

@Component({
  selector: 'home',
  directives: [PhotoList],
  templateUrl: 'app/components/home.component.html'
})
export class HomeComponent{

}
