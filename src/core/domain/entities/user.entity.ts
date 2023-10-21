export class UserEntity {
  public id: string;
  public email: string;
  public password: string;
  public fullName: string;
  public active: boolean;

  static create(email: string, password: string, fullName: string): UserEntity {
    const userEntity = new UserEntity();
    userEntity.email = email;
    userEntity.password = password;
    userEntity.fullName = fullName;
    return userEntity;
  }
}
