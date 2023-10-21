import { IUserService } from 'src/core/domain/ports/inbound/user-service.interface';
import { CreateUserDto } from '../dtos/create-user-dto.interface';
import { IUserApplication } from '../user-application.interface';
import { UserEntity } from 'src/core/domain/entities/user.entity';

export class UserApplication implements IUserApplication {
  constructor(private user: IUserService) {}
  async createUser(createUserDto: CreateUserDto): Promise<boolean> {
    const userEntity = UserEntity.create(
      createUserDto.email,
      createUserDto.password,
      createUserDto.fullName,
    );
    const success = await this.user.create(userEntity);
    return !success;
  }
}
