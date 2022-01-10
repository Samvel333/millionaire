import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/question/question.repository';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/helpers/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [
    QuestionService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  controllers: [QuestionController],
  imports: [
    TypeOrmModule.forFeature([QuestionRepository]),
    AuthModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'jwtsecrett',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
})
export class QuestionModule {}
