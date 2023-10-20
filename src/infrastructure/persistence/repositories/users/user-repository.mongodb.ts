import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSignInDto } from 'src/application/dtos/users/user-sign-in.dto';
import { UserSignUpDto } from 'src/application/dtos/users/user-sign-up.dto';
import { UpdateUserDto } from 'src/application/dtos/users/user-update.dto';
import { User } from 'src/domain/models/users/user.model';
import { IUserRepository } from 'src/domain/repositories/users/user-repository.interface';

@Injectable()
export class UserRepositoryMongoDB implements IUserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signUp(userSignUpDto: UserSignUpDto): Promise<User> {
    return new this.userModel(userSignUpDto).save();
  }
  async signIn(userSignInDto: UserSignInDto): Promise<User> {
    return this.userModel.findOne({ email: userSignInDto.username }).exec();
  }
  async getProfile(userId: string): Promise<User> {
    return this.userModel.findOne({ id: userId }).exec();
  }
  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(userId, updateUserDto, { new: true })
      .exec();
  }
}
