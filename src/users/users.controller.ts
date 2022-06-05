import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from 'src/typeorm/User';
import { CreateUserdto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userservice: UsersService) {}
  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createuser: CreateUserdto) {
    const newUser = new User();
    newUser.userName = createuser.userName;
    newUser.emailId = createuser.emailId;
    newUser.mobileNumber = createuser.mobileNumber;
    newUser.homeAdress = createuser.homeAdress;
    newUser.officeAdress = createuser.officeAdress;
    return this.userservice.createNewUser(newUser);
  }
  @Post('deleteUser')
  @UsePipes(ValidationPipe)
  deleteUser(@Body() body:any ) {
    return this.userservice.deleteUser(body.userId);
  }
  @Post('finduser')
  findUsers(){
      return this.userservice.findDetails()
  }
}

