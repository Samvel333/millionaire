import {
  ConflictException,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create.user.dto';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
  async createUser(createUserDto: CreateUserDto): Promise<string> {
    const { username, password, email } = createUserDto;

    // check if the user exists in the db
    const userInDb = await this.findOne({
      where: { username },
    });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: UserEntity = await this.create({
      username,
      password,
      email,
    });
    await this.save(user);
    return 'User Created Successfully!';
}
}