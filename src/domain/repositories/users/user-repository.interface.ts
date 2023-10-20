import { UserSignInDto } from 'src/application/dtos/users/user-sign-in.dto';
import { UserSignUpDto } from 'src/application/dtos/users/user-sign-up.dto';
import { UpdateUserDto } from 'src/application/dtos/users/user-update.dto';
import { User } from 'src/domain/models/users/user.model';

export interface IUserRepository {
  signUp(userSignUpDto: UserSignUpDto): Promise<User>;
  signIn(userSignInDto: UserSignInDto): Promise<User>;
  getProfile(userId: string): Promise<User>;
  updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User>;
}
