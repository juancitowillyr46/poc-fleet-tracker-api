import { CreateUserDto } from './dtos/create-user-dto.interface';

export interface IUserApplication {
  createUser(createUserDto: CreateUserDto): Promise<boolean>;
}
