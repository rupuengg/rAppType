import { ActionsUnion, createAction } from "./ActionTypes";
import { IUserModel } from "../models/Auth/IUserModel";

export enum AuthActionsTypes {
  START_LOGGING = 'Auth/START_LOGGING',
}

export const AuthActions = {
  startLogging: (user: IUserModel) => createAction(AuthActionsTypes.START_LOGGING, user),
};

export const startLogging = (username: string, password: string) => {

};

export type AuthAction = ActionsUnion<typeof AuthActions>;