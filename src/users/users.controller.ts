import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/helpers/role.enum';
import { Roles } from 'src/auth/helpers/roles.decorator';
import { UserEntity } from 'src/users/user.entity';
import { CreateUserDto } from './dto/create.user.dto';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(AuthGuard())
@Roles(Role.Admin)
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
    return this.usersService.create(createUserDto);
  }
}
