export interface UserCreate {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  active: boolean;
  createdAt: string;
}
