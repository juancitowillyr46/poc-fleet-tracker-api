import { DynamicModule, Module, Type } from '@nestjs/common';
import { UserDomainService } from './domain/services/user-domain-service.impl';
import { IUserRepository } from './domain/ports/outbound/user-repository.interface';
import { SignInUseCase } from './application/services/sign-in-use-case';
import { IUserService } from './domain/ports/inbound/user-service.interface';

export type CoreModuleOptions = {
  modules: Type[];
  adapters?: {
    userRepository: Type<IUserRepository>;
  };
};

// Application service reference
export const SIGN_IN_USE_CASE = 'SIGN_IN_USE_CASE';
// domain services references
export const USER_SERVICE = 'USER_SERVICE';

@Module({})
export class CoreModule {
  static register({ modules, adapters }: CoreModuleOptions): DynamicModule {
    const { userRepository } = adapters;

    const SignInUseCaseProvider = {
      provide: SIGN_IN_USE_CASE,
      useFactory(user: IUserService) {
        return new SignInUseCase(user);
      },
      inject: [USER_SERVICE],
    };

    const UserServiceProvider = {
      provide: USER_SERVICE, // provider token
      useFactory(repository: IUserRepository) {
        // return a service instance
        return new UserDomainService(repository);
      },
      inject: [
        userRepository, // get this value from CoreModuleOptions
      ],
    };

    // const UserRepositoryProvider {
    //   provide: '',
    //   useClass: UserRepository,
    //   useFactory: (userModel: Model<UserModel>) => {
    //     return new MongoDBUserRepository(userModel);
    //   },
    //   inject: [UserModel],
    // },

    return {
      module: CoreModule,
      global: true,
      imports: [...modules],
      providers: [SignInUseCaseProvider, UserServiceProvider],
      exports: [SIGN_IN_USE_CASE],
    };
  }
}
