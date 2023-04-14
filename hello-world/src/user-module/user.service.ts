import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  
  public users: User[] = []

  getUsers(): User [] {
    return this.users;
  }

  getUser(email: string): User{
    const userData = this.users.filter( i => i.email === email)
    if (userData && Array.isArray(userData) && userData.length >  0){
      return userData[0]
    }
    throw new NotFoundException('user not found');
  }
  
  addUser(user:User): User {
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): User [] {
    const remainingUsers = this.users.filter(i => i.email !== email);
    this.users = remainingUsers;
    return remainingUsers;
  }
}
