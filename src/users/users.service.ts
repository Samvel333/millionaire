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

  async createUser(createUserDto: CreateUserDto): Promise<string> {
    this.usersRepository.createUser(createUserDto);
    return 'user created';
  }

  async create(createUserDto: CreateUserDto): Promise<string> {
    const { username, password, email } = createUserDto;

    // check if the user exists in the db
    const userInDb = await this.usersRepository.findOne({
      where: { username },
    });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: UserEntity = await this.usersRepository.create({
      username,
      password,
      email,
    });
    await this.usersRepository.save(user);
    return 'User Created Successfully!';
  }
}
