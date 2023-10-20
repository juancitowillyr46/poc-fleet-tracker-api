export class UpdateUserDto {
  id: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  fullName: string;
}
