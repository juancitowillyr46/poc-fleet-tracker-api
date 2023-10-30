import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { UserRepositoryAdapter } from './infrastructure/adapters/user-repository.adapter';

@Module({
  imports: [
    InfrastructureModule,
    CoreModule.register({
      modules: [InfrastructureModule],
      adapters: {
        userRepository: UserRepositoryAdapter,
      },
    }),
  ],
})
export class AppModule {}
