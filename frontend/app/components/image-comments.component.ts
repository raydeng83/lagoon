import {Component, Input} from 'angular2/core';
import {Photo} from '../models/photo';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {Comment} from '../models/comment';

@Component ({
  selector: 'image-comments',
  templateUrl: 'app/components/image-comments.component.html'
})
export class ImageComments {
  @Input('photo') photo: Photo;

  user: User;
  newComment = new Comment ();

  constructor (private userService: UserService) {
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
      },
      error => console.log(error)
    )

  }

  ngOnInit() {
  }

  onSubmit() {
    this.photo.commentList.push(this.newComment);
    this.newComment = new Comment();
  }
}
