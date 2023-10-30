export class UserEntity {
  public id: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public fullName: string;
  public active: boolean;
  public createdAt: string;

  static create(
    email: string,
    password: string,
    confirmPassword: string,
    fullName: string,
    active: boolean,
    createdAt: string,
  ): UserEntity {
    const userEntity = new UserEntity();
    userEntity.email = email;
    userEntity.password = password;
    userEntity.confirmPassword = confirmPassword;
    userEntity.fullName = fullName;
    userEntity.active = active;
    userEntity.createdAt = createdAt;
    return userEntity;
  }
}
