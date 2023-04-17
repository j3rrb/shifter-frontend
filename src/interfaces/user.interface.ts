export interface ICreateUserForm {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginForm {
  username: string;
  password: string;
}

export interface IUser {
  name: string;
  username: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}
