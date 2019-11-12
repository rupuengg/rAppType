import { IAuth, defaultAuth } from "../../store/auth/auth.store";
import AuthActions from "../../actions/Auth.action";

const authReducer = (state: IAuth = defaultAuth, action: any) => {
  switch (action.type) {
    case AuthActions.START_LOGGING:
      return state;
    default:
      return state;
  }
};

export default authReducer;