import { IUserModel, defaultUser } from "../../models/Auth/IUserModel";

export interface IAuth {
  isLoggedIn: boolean;
  user: IUserModel;
};

export const defaultAuth: IAuth = {
  isLoggedIn: false,
  user: defaultUser,
};