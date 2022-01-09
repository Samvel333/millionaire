import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/question/question.repository';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/helpers/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [QuestionService,  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },],
  controllers: [QuestionController],
  imports: [TypeOrmModule.forFeature([QuestionRepository]), AuthModule],
})
export class QuestionModule {}
