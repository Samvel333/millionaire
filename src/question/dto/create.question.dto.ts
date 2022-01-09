import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  gamequestion: string;

  @IsNotEmpty()
  answers: string;

  @IsNotEmpty()
  theTrueVariant: number;
}
