import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './question/question.module';
import { GameModule } from './game/game.module';
import config from '../ormconfig';

@Module({
  imports: [UsersModule, AuthModule, TypeOrmModule.forRoot(config), GameModule, QuestionModule],
})
export class AppModule {}


