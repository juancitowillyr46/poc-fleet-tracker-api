import { CreateUserDto } from '../shared/dtos/create-user-dto.interface';

export interface ISignInUseCase {
  createUser(createUserDto: CreateUserDto): Promise<boolean>;
}
