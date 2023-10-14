import { AuthService } from "services/http/auth/AuthService";
import { AuthCredentials } from "services/http/models";
import { AppDispatch } from "store";
import { timerSlice } from "store/timer/TimerSlice";
import { authSlice } from "./AuthSlice";

export class AuthActions {
  static singup(authCredentials: AuthCredentials) {
    return async (dispatch: AppDispatch) => {
      const { data } = await AuthService.signup(authCredentials);
      dispatch(authSlice.actions.setUser(data.user));
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshTokenId);
    };
  }

  static login(authCredentials: AuthCredentials) {
    return async (dispatch: AppDispatch) => {
      const { data } = await AuthService.login(authCredentials);
      dispatch(authSlice.actions.setUser(data.user));
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshTokenId);
    };
  }

  static getUser() {
    return async (dispatch: AppDispatch) => {
      try {
        const { data } = await AuthService.getUser();
        if (data.user) {
          dispatch(authSlice.actions.setUser(data.user));
          dispatch(timerSlice.actions.setParams(data.options));
        }
      } catch (err) {}
    };
  }
}
