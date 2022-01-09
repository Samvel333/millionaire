import { QuestionEntity } from 'src/question/question.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(QuestionEntity)
export class QuestionRepository extends Repository<QuestionEntity> {

}
