import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateQuestionDto } from 'src/question/dto/create.question.dto';
import { Role } from 'src/auth/helpers/role.enum';
import { Roles } from 'src/auth/helpers/roles.decorator';
import { QuestionEntity } from './question.entity';
import { QuestionService } from './question.service';
import { PassportModule } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/helpers/roles.guard';
import { GetUser } from 'src/users/get-user.decorator';
import { UserEntity } from 'src/users/user.entity';
import { userInfo } from 'os';
function IsAdmin(user) {
  if ((user.role = 'user')) {
    return true;
  }
}
@Controller('question')
@UseGuards(RolesGuard, AuthGuard('jwt'))
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get()
  getAllQuestions(@GetUser() user: UserEntity) {
    console.log(user.role);
    if (!IsAdmin(user)) {
      return 'This function is aviable only for admins';
    }
    return this.questionService.findAll();
  }

  @Post('add')
  addQuestion(
    @Body() createQuestionDto: CreateQuestionDto,
    @GetUser() user: UserEntity,
  ) {
    if (!IsAdmin(user)) {
      return 'This function is aviable only for admins';
    }
    return this.questionService.add(createQuestionDto);
  }

  @Get('/:id')
  getQuestionById(
    @Param('id') id: string,
    @GetUser() user: UserEntity,
  ): Promise<QuestionEntity> | string {
    if (!IsAdmin(user)) {
      return 'This function is aviable only for admins';
    }

    return this.questionService.getQuestionById(id);
  }

  @Patch('/:id')
  updateQuestion(
    @Param('id') id: string,
    @Body() createQuestionDto: CreateQuestionDto,
    @GetUser() user: UserEntity,
  ): Promise<string> | string {
    if (!IsAdmin(user)) {
      return 'This function is aviable only for admins';
    }
    return this.questionService.updateQuestion(id, createQuestionDto);
  }

  @Delete('/:id')
  deleteQuestion(
    @Param('id') id: string,
    @GetUser() user: UserEntity,
  ): Promise<string> | string {
    if (!IsAdmin(user)) {
      return 'This function is aviable only for admins';
    }
    return this.questionService.remove(id);
  }
}
