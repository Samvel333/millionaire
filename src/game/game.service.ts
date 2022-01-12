import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from 'src/question/question.entity';
import { QuestionRepository } from 'src/question/question.repository';
import { UserEntity } from 'src/users/user.entity';
import { Connection } from 'typeorm';
import { GameEntity } from './game.entity';
import { GameRepository } from './game.repository';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameRepository)
    private gameRepo: GameRepository,
  ) {}
  async run(
    user: UserEntity,
    question: QuestionEntity,
    game: GameEntity,
    answer: number,
  ) {
    game.user_username = user.username;
    for (let i = 0; i <= 10; i++) {
      if (answer === question.theTrueVariant) {
        game.score = game.score + 1;
      }
    }
    this.gameRepo.save(game);
  }

  async answerTheQuestion(question:QuestionEntity, answer:number, user:UserEntity, game:GameEntity){
    for (let i = 0; i <= 10; i++) {
      if (answer === question.theTrueVariant) {
        game.score = game.score + 1;
      }
    }
  }
}
