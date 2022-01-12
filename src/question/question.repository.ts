import { QuestionEntity } from 'src/question/question.entity';
import { EntityRepository, getConnection, Repository } from 'typeorm';

@EntityRepository(QuestionEntity)
export class QuestionRepository extends Repository<QuestionEntity> {
    async getRandomQuestions() {

        return await getConnection()
          .createQueryBuilder()
          .select("gamequestion", "answers")
          .from(QuestionEntity, "question")
          .orderBy("RANDOM()")
          .limit(10)
          .getOne()
      }
}
