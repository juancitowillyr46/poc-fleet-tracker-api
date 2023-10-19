import { CreateUserDto } from 'src/application/dtos/users/user-create.dto';
import { UpdateUserDto } from 'src/application/dtos/users/user-update.dto';
import { User } from 'src/domain/models/users/user.model';

export interface IUserRepository {
  create(createUserDto: CreateUserDto): Promise<User>;
  findOne(createUserDto: UpdateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  remove(id: string): Promise<User>;
}
