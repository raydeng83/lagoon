import {Comment} from './comment';

export class Photo {
  public photoId: string;
  public userId: string;
  public title: string;
  public description: string;
  public time: string;
  public link: string;
  public likes: number;
  public comments: Comment[];
}
