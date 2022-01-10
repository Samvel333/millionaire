import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { GameController } from './game.controller';
import { GameRepository } from './game.repository';
import { GameService } from './game.service';

@Module({
  controllers: [GameController],
  providers: [GameService],
  imports: [
    TypeOrmModule.forFeature([GameRepository]),
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
export class GameModule {}
