import { BaseArgumentDto } from '../base-argument.dto';

export class UserSignInDto extends BaseArgumentDto {
  username: string;
  password: string;
  rememberBy: boolean;
}
