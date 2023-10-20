import { UserSignInDto } from 'src/application/dtos/users/user-sign-in.dto';
import { UseCaseStrategy } from '../base-use-case.interface';
import { IUserRepository } from 'src/domain/repositories/users/user-repository.interface';

export class UseCaseSignIn implements UseCaseStrategy {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(userSignInDto: UserSignInDto): Promise<void> {
    const user = await this.userRepository.signIn(userSignInDto);
    if (!user) {
      throw new Error('User no exist');
    }
    if (user.password != userSignInDto.password) {
      throw new Error('Password Incorrect');
    }
  }
}
