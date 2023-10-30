import { UserEntity } from '../../../core/domain/entities/user.entity';
import { IUserService } from '../../domain/ports/inbound/user-service.interface';
import { ISignInUseCase } from '../sign-in-use-case.interface';
import { SignInUseCase } from './sign-in-use-case';

function UserServiceMock(userEntity: UserEntity): IUserService {
  return {
    create: jest.fn().mockReturnValue(Promise.resolve(userEntity)),
    update: jest.fn().mockReturnValue(Promise.resolve(userEntity)),
    delete: jest.fn().mockReturnValue(Promise.resolve(userEntity)),
    readById: jest.fn().mockReturnValue(Promise.resolve(userEntity)),
  };
}

describe('UserDomainService', () => {
  let service: ISignInUseCase = null;
  it('SignIn', async () => {
    const userService = UserServiceMock(new UserEntity());
    service = new SignInUseCase(userService);
    await service.createUser({
      email: 'juan.rodas.manez@gmail.com',
      fullName: 'Juan Rodas',
      password: 'juanrodas',
      confirmPassword: 'juanrodas',
      id: '0',
      active: true,
      createdAt: '',
    } as UserEntity);
    expect(userService.create).toBeCalled();
  });
});
