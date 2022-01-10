import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { UserEntity } from './user.entity';
import { UsersRepository } from './user.entity.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findById(id: string): Promise<UserEntity> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async findbyEmail(email: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOne(email);
  }

  async create(createUserDto: CreateUserDto): Promise<string> {
    this.usersRepository.createUser(createUserDto);
    return 'user created';

  }
}
