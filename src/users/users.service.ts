import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/User';
import { Repository } from 'typeorm';
import { CreateUserdto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  createNewUser(CreateUser: User) {
    const newUser = this.userRepository.save(CreateUser);
    return newUser;
  }
  deleteUser(userId: string) {
    const newUser = this.userRepository
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id: userId })
      .execute();
    return newUser;
  }
  findDetails() {
    const allUsers = this.userRepository.find();
    return allUsers;
  }
}
