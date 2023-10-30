import { Module } from '@nestjs/common';
import { UserController } from './http-server/controllers/user.controller';
import { UserRepositoryAdapter } from './adapters/user-repository.adapter';
import { FleetTrackerDatabaseModule } from './fleet-tracker-database/fleet-tracker-database.module';
@Module({
  providers: [UserRepositoryAdapter],
  exports: [UserRepositoryAdapter],
  imports: [FleetTrackerDatabaseModule],
  controllers: [UserController],
})
export class InfrastructureModule {}
