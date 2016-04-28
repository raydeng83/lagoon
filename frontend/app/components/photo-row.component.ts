import {Component } from 'angular2/core';
import {PhotoService} from '../services/photo.service';
import {Photo} from '../models/photo';
@Component({
  selector: 'photo-row',
  templateUrl: 'app/components/photo-row.component.html'
})
export class PhotoRow {
  photoList: Photo[];
  photoListSorted: Photo[];
  photoListRanked: Photo[];

  constructor (_photoService: PhotoService) {
    _photoService.getPhotosPromise().then(photos => this.photoList = photos);
  }

  ngOnInit() {
    this.photoListSorted = this.photoList.sort((a,b) => b.likes-a.likes);

    this.photoListRanked = [];

    for (let index in this.photoListSorted) {
      if (Number(index) < 3) {
        this.photoListRanked.push(this.photoListSorted[index]);
      } else {
        break;
      }
    }
  }
}
