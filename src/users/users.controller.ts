import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserEntity } from 'src/users/user.entity';
import { CreateUserDto } from './dto/create.user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.findById(id);
  }

  @Get('email')
  getByEmail(@Param('email') email: string) {
    return this.usersService.findbyEmail(email);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
