import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from 'src/question/dto/create.question.dto';
import { QuestionEntity } from './question.entity';
import { QuestionRepository } from './question.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  findAll(): Promise<QuestionEntity[]> {
    return this.questionRepository.find();
  }

  async getQuestionById(id: string): Promise<QuestionEntity> {
    const found = await this.questionRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Question with ID "${id}" not found`);
    }

    return found;
  }

  async remove(id: string): Promise<string> {
    const found = await this.questionRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Question with ID "${id}" not found`);
    }
    await this.questionRepository.delete(id);
    return 'Question Deleted Successfully';
  }

  async add(createQuestionDto: CreateQuestionDto): Promise<string> {
    const { gamequestion, answers, theTrueVariant } = createQuestionDto;

    // check if the user exists in the db
    const questInDb = await this.questionRepository.findOne({
      where: { gamequestion },
    });
    if (questInDb) {
      throw new HttpException(
        'Question already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const question: QuestionEntity = await this.questionRepository.create({
      gamequestion,
      answers,
      theTrueVariant,
    });
    await this.questionRepository.save(question);
    return 'Question Added Successfully!';
  }

  //   async update(id: string, updateDto: UpdateQuestionDto) {
  //     const question = await this.getQuestionById(id)
  //     if (!question) {
  //       throw new NotFoundException();
  //     }

  //     return post;
  //   }
}
