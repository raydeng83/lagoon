import {Photo} from './photo';
import {User} from './user';

export class Comment {
  commentId: number;
  photo: Photo;
  user: User;
  content: string;
}
