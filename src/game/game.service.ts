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
        
    // }
    // for(let i = 0; i<=10; i++){
    //     console.log(randomQuestion(QuestionRepository))
    //     let myAnswer = prompt('Write the True Answer from variants')
    //     subscore += point
    //     if(myAnswer == thetrue){
    //       score += point
    //       console.log(`True!!, score: ${score}`)
    //     } else{
    //       console.log(`Wrong!, score: ${score}`)
    //     }
    // }
    
    // async getRandomQuestion(questionRepository:QuestionRepository) {
    //     var keys = Object.keys(obj);
    //     this.questionArr = obj[keys[ keys.length * Math.random() << 0]]
    //     this.question = questionArr[0]
    //     this.variantsArr = questionArr[1]
    //     this.variants = []
    //     for(i=0; i<=4; i++){
    //       variants.push(Rand(variantsArr))
    //       }
    //     this.thetrue = questionArr[2]
    //     this.point = questionArr[3]
    //     deleteByValue(questionArr)
    //     return question +'\n| '+ variants.join(' | ')
    // }
    
    
    // function Rand(arg){
    //   let randNum = arg[Math.floor(Math.random() * arg.length)]
    //   let num = randNum
    //   const index = arg.indexOf(randNum);
    //   if (index > -1) {
    //     arg.splice(index, 1);
    //   }
    //   return num
    }
    
}
