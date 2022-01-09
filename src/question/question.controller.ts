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

@Controller('question')
@UseGuards(AuthGuard())
@Roles(Role.Admin)
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get()
  @Roles(Role.Admin)
  getAllQuestions() {
    return this.questionService.findAll();
  }

  @Post('add')
  addQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.add(createQuestionDto);
  }

  @Get('/:id')
  getQuestionById(@Param('id') id: string): Promise<QuestionEntity> {
    return this.questionService.getQuestionById(id);
  }

  @Delete('/:id')
  deleteQuestion(@Param('id') id: string): Promise<string> {
    return this.questionService.remove(id);
  }
  // @Patch('update')
  // updateQuestion(@Body() updateQuestionDto: CreateQuestionDto){

  // }
}