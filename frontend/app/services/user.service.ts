import {User} from '../models/user';
import {MockUsers} from '../data/mock-users';
import {Injectable} from 'angular2/core';

@Injectable()
export class UserService {
  users: User[];

  constructor (_mockUsers: MockUsers) {
    this.users=_mockUsers.getUsers();
  }

  getUsers() {
    return Promise.resolve(this.users);
  }

  getUserById(id: string) {
    return this.users.filter(user => user.userId === id)[0];
  }
}
