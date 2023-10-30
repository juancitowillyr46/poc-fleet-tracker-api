import { CreateUserDto } from '../../shared/dtos/create-user-dto.interface';
import { ISignInUseCase } from '../sign-in-use-case.interface';
import { UserEntity } from '../../../core/domain/entities/user.entity';
import * as moment from 'moment';
import { IUserService } from '../../domain/ports/inbound/user-service.interface';

export class SignInUseCase implements ISignInUseCase {
  constructor(private readonly userService: IUserService) {}
  async createUser(dto: CreateUserDto): Promise<boolean> {
    if (dto.password !== dto.confirmPassword) {
      throw new Error(`Password not Equals`);
    }

    if (dto.password.length < 8) {
      throw new Error(`Password is less than 8 characters`);
    }

    const audit = moment(new Date().getTime())
      .format('YYYY-MM-DD HH:mm:ss')
      .toString();
    const userEntity = UserEntity.create(
      dto.email,
      dto.password,
      dto.confirmPassword,
      dto.fullName,
      true,
      audit.toString(),
    );
    const success = await this.userService.create(userEntity);
    return !success;
  }
}
