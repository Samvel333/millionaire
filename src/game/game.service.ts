import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GameRepository } from './game.repository';


@Injectable()
export class GameService {
    constructor(
        @InjectRepository(GameRepository)
        private gameRepository: GameRepository,
      ) {}

    async startGame(id:string, user_username:string, answer:number){
        
     //....
    
}
}