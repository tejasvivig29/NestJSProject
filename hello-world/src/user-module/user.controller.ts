import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // HTTP GET /user
  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

 @Get(':email')
 getUser(email: string): User{
  return this.userService.getUser(email);
 }
  //HTTP POST /users
  @Post()
  postUser(@Body() user: User): User {
    return this.userService.addUser(user);
  }


  // HTTP DELETE /users/email@gmail.com
  @Delete(':email')
  deleteUser(@Param('email') email:string): User []{
    return this.userService.deleteUser(email);
  }
}
