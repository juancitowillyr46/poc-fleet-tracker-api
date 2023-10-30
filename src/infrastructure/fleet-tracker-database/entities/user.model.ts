import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop()
  email: string;

  @Prop()
  fullName: string;

  @Prop()
  password: string;

  @Prop()
  active: boolean;

  @Prop()
  createdAt: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
