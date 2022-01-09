import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string
}

export class UserDto {  
    @IsNotEmpty()  id: string;
    @IsNotEmpty()  username: string;
    @IsNotEmpty()  @IsEmail()  email: string;
}