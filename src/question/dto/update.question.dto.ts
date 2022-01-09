import { IsNotEmpty } from 'class-validator';

export class UpdateQuestionDto {
  @IsNotEmpty()
  gamequestion: string;

  @IsNotEmpty()
  answers: string;

  @IsNotEmpty()
  theTrueVariant: number;
}
