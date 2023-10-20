import { BaseArgumentDto } from '../base-argument.dto';

export class UserSignUpDto extends BaseArgumentDto {
  email: string;
  password: string;
  fullName: string;
}
