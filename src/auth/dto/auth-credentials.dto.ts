import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  email:string

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}