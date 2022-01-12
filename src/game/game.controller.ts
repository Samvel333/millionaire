import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from 'src/question/question.entity';
import { QuestionRepository } from 'src/question/question.repository';
import { GetUser } from 'src/users/get-user.decorator';
import { UserEntity } from 'src/users/user.entity';
import { GameEntity } from './game.entity';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(
    private gameService: GameService,
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  @Post('start')
  start(
    @GetUser() user: UserEntity,
    @Body() answer: number, game: GameEntity,
    @Param('question') question: QuestionEntity,
  ) {
    let steps = 1;
    if (steps === 1) {
      steps++;
      return this.questionRepository.getRandomQuestions();
    }
    if (steps === 2) {
      return this.gameService.answerTheQuestion(question, answer, user, game);
    }

  }
}
