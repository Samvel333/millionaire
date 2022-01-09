import { UserEntity } from "../user.entity";
import { UserDto } from "./create.user.dto";

export const toUserDto = (data: UserEntity): UserDto => {  
    const { id, username, email } = data;
    const userDto: UserDto = { id, username, email };
    return userDto;
};