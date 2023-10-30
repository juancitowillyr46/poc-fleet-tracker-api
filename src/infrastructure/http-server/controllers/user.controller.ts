import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from '../../../core/shared/dtos/create-user-dto.interface';
import { SIGN_IN_USE_CASE } from '../../../core/core.module';
import { SignInUseCase } from '../../../core/application/services/sign-in-use-case';

@Controller('users')
export class UserController {
  constructor(
    @Inject(SIGN_IN_USE_CASE) private readonly useCase: SignInUseCase,
  ) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.useCase.createUser(createUserDto);
  }
}
