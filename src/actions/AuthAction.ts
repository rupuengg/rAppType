import { ActionsUnion } from "./ActionTypes";

export enum AuthActionsTypes {
  START_LOGGING = 'Auth/START_LOGGING',
}

export type AuthAction = ActionsUnion<typeof AuthActionsTypes>;