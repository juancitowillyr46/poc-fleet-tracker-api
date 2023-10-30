import { UserEntity } from '../entities/user.entity';
import { IUserService } from '../ports/inbound/user-service.interface';
import { IUserRepository } from '../ports/outbound/user-repository.interface';

export class UserDomainService implements IUserService {
  constructor(private userRepository: IUserRepository) {}
  async create(userEntity: UserEntity): Promise<UserEntity> {
    return this.userRepository.create(userEntity);
  }
  async readById(id: string): Promise<UserEntity> {
    return this.userRepository.readById(id);
  }
  async update(id: string, userEntity: UserEntity): Promise<UserEntity> {
    return this.userRepository.update(id, userEntity);
  }
  async delete(id: string): Promise<UserEntity> {
    return this.userRepository.delete(id);
  }
}
