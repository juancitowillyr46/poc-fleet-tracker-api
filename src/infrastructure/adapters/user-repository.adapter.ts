import { InjectModel } from '@nestjs/mongoose';
import { UserEntity } from '../../core/domain/entities/user.entity';
import { IUserRepository } from '../../core/domain/ports/outbound/user-repository.interface';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { User } from '../fleet-tracker-database/entities/user.model';

@Injectable()
export class UserRepositoryAdapter implements IUserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(userEntity: UserEntity): Promise<UserEntity> {
    const save = await new this.userModel({
      email: userEntity.email,
      password: userEntity.password,
      fullName: userEntity.password,
      active: userEntity.active,
      createdAt: userEntity.createdAt,
    }).save();
    const entity = new UserEntity();
    entity.id = save.id;
    return entity;
  }
  async readById(id: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  async update(id: string, userEntity: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  private toModel(userEntity: UserEntity): User {
    const model = new User();
    model.email = userEntity.email;
    model.password = userEntity.password;
    model.fullName = userEntity.fullName;
    model.active = userEntity.active;
    model.createdAt = userEntity.createdAt;
    return model;
  }
}
