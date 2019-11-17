export interface IUserModel {
  user_id: string,
  email: string,
  first_name: string,
  last_name: string,
};

export const defaultUser: IUserModel = {
  user_id: "",
  email: "",
  first_name: "",
  last_name: "",
};