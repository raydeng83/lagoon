import {Photo} from './photo';

export class User {
  public userId: string;
  public firstName: string;
  public lastName: string;
  public userName: string;
  public password: string;
  public joinDate: string;
  public photos: Photo[];
  public liked: string[];
}
