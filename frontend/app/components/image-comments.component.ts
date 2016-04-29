// import {Component, Input} from 'angular2/core';
// import {Photo} from '../models/photo';
// import {User} from '../models/user';
// import {UserService} from '../services/user.service';
// import {Comment} from '../models/comment';
//
// @Component ({
//   selector: 'image-comments',
//   templateUrl: 'app/components/image-comments.component.html'
// })
// export class ImageComments {
//   @Input('photo') photo: Photo;
//
//   user: User;
//   newComment = new Comment ('', '');
//
//   constructor (private _userService: UserService) {}
//
//   ngOnInit() {
//     this.user=this._userService.getUserById(this.photo.userId);
//     this.newComment.userId = this.user.userId;
//   }
//
//   onSubmit() {
//     this.photo.comments.push(this.newComment);
//     this.newComment = new Comment('','');
//     this.newComment.userId = this.user.userId;
//   }
// }
