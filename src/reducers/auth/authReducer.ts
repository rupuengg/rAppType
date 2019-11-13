import { IAuth, defaultAuth } from "../../store/auth/auth.store";
import { AuthAction, AuthActionsTypes } from "../../actions/AuthAction";

const authReducer = (state: IAuth = defaultAuth, action: AuthAction) => {
  switch (action.type) {
    case AuthActionsTypes.START_LOGGING:
      return state;
    default:
      return state;
  }
};

export default authReducer;