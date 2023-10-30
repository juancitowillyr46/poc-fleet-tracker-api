import { UserEntity } from '../entities/user.entity';
import { IUserService } from '../ports/inbound/user-service.interface';
import { IUserRepository } from '../ports/outbound/user-repository.interface';
import { UserDomainService } from './user-domain-service.impl';

function UserRepositoryMock(user: UserEntity): IUserRepository {
  return {
    create: jest.fn().mockReturnValue(Promise.resolve(user)),
    update: jest.fn().mockReturnValue(Promise.resolve(user)),
    delete: jest.fn().mockReturnValue(Promise.resolve(user)),
    readById: jest.fn().mockReturnValue(Promise.resolve(user)),
  };
}

describe('UserDomainService', () => {
  let service: IUserService = null;
  it('userRepository.create()', async () => {
    const userRepositoryMock = UserRepositoryMock({
      email: 'juan.rodas.manez@gmail.com',
      fullName: 'Juan Rodas',
      password: 'juanrodas',
      confirmPassword: 'juanrodas2',
      id: '0',
      active: true,
      createdAt: new Date().toString(),
    } as UserEntity);
    service = new UserDomainService(userRepositoryMock);
    await service.create({
      email: 'juan.rodas.manez@gmail.com',
      fullName: 'Juan Rodas',
      password: 'juanrodas',
      confirmPassword: 'juanrodas2',
      id: '0',
      active: true,
      createdAt: new Date().toString(),
    } as UserEntity);
    expect(userRepositoryMock.create).toBeCalled();
  });
});
