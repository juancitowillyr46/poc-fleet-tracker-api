import { UseCaseStrategy } from '../base-use-case.interface';
import { IUserRepository } from 'src/domain/repositories/users/user-repository.interface';
import { UpdateUserDto } from 'src/application/dtos/users/user-update.dto';

export class UserCaseUpdateUser implements UseCaseStrategy {
  constructor(private readonly userRepository: IUserRepository) {}
  execute(updateUserDto: UpdateUserDto): void {
    if (!updateUserDto.oldPassword) {
      throw new Error('Email no valid');
    }
    if (updateUserDto.newPassword === updateUserDto.confirmPassword) {
      throw new Error('Password no valid');
    }
    this.userRepository.updateUser(updateUserDto.id, updateUserDto);
  }
}
