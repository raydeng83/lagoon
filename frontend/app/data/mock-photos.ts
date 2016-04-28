import {Photo} from '../models/photo';
import {Injectable} from 'angular2/core';

@Injectable()
export class MockPhotos {
  private photos: Photo[];

  constructor() {
    this.photos=[
      {"photoId":"photo1", "userId":"user1", "title":"This is a Photo Title", "description": "This is a photo description", "time":"04/16/2016", "link":"resources/static/pic/sample1.jpg", "likes":53, "comments" : [{"userId":"user2", "content":"This is an awesome picture!"}, {"userId":"user3", "content": "The picture looks really good!"}]},
      {"photoId":"photo2", "userId":"user2","title":"This is a title", "description":"This is a description", "time":"03/27/2016", "link":"resources/static/pic/sample2.jpg" , "likes" : 21, "comments": []},
      {"photoId":"photo3", "userId":"user1","title":"This is a title", "description":"This is a description", "time":"05/28/2016", "link":"resources/static/pic/sample3.jpg", "likes" : 10, "comments": [] },
      {"photoId":"photo4", "userId":"user3","title":"This is a title", "description":"This is a description", "time":"04/20/2016", "link":"resources/static/pic/sample4.jpg", "likes" : 5, "comments": []},
      {"photoId":"photo5", "userId":"user2","title":"This is a title", "description":"This is a description", "time":"07/14/2016", "link":"resources/static/pic/sample5.jpg", "likes" : 14, "comments": []},
      {"photoId":"photo6","userId":"user3", "title":"This is a title", "description":"This is a description", "time":"01/27/2016", "link":"resources/static/pic/sample6.jpg", "likes" : 9, "comments": []},
      {"photoId":"photo7", "userId":"user3","title":"This is a title", "description":"This is a description", "time":"02/15/2016", "link":"resources/static/pic/sample7.jpg", "likes" : 33, "comments": []}
    ];
  }

  public getPhotos() {
    return this.photos;
  }
}
