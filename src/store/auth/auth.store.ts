export interface IAuth {
  isLoggedIn: boolean;
};

export const defaultAuth: IAuth = {
  isLoggedIn: false,
};