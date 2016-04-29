import {Injectable} from 'angular2/core';

@Injectable()
export class GlobalService {
  private currentUserName: string;

  public setCurrentUserName (userName: string) {
    this.currentUserName=userName;
  }

  public getCurrentUserName () {
    return this.currentUserName;
  }
}
