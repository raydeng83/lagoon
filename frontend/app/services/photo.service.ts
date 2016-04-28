import {Injectable} from 'angular2/core';
import {MockPhotos} from '../data/mock-photos';
import {Photo} from '../models/photo';

@Injectable()
export class PhotoService {
  photos: Photo[];

  constructor (_mockPhotos: MockPhotos) {
    this.photos = _mockPhotos.getPhotos();
  }

  getPhotos() {
    return this.photos;
  }

  getPhotosPromise() {
    return Promise.resolve(this.photos);
  }

  getPhotoById (id: string) {
    return this.photos.filter(photo => photo.photoId === id)[0];
  }
}
