import { UserSignUpDto } from 'src/application/dtos/users/user-sign-up.dto';
import { UseCaseStrategy } from '../base-use-case.interface';
import { IUserRepository } from 'src/domain/repositories/users/user-repository.interface';

export class UseCaseSignUp implements UseCaseStrategy {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(userSignUpDto: UserSignUpDto): Promise<void> {
    if (!userSignUpDto.email) {
      throw new Error('Email no valid');
    }
    if (!userSignUpDto.password) {
      throw new Error('Password no valid');
    }
    if (!userSignUpDto.fullName) {
      throw new Error('FullName no valid');
    }
    this.userRepository.signUp(userSignUpDto);
  }
}
