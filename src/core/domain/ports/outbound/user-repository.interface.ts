import { UserEntity } from '../../entities/user.entity';

export interface IUserRepository {
  create(userEntity: UserEntity): Promise<UserEntity>;
  readById(id: string): Promise<UserEntity>;
  update(id: string, userEntity: UserEntity): Promise<UserEntity>;
  delete(id: string): Promise<UserEntity>;
}
