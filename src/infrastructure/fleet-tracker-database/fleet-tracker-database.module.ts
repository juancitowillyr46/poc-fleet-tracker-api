import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/fleettracker'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [MongooseModule],
})
export class FleetTrackerDatabaseModule {}
