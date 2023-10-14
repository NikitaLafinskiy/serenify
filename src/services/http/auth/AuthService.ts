import { AxiosResponse } from "axios";
import { $api } from "..";
import { AuthCredentials, AuthRes, GetUserRes } from "../models";

export class AuthService {
  static async signup(
    authCredentials: AuthCredentials
  ): Promise<AxiosResponse<AuthRes>> {
    return $api.post("/auth/signup", {
      username: authCredentials.username,
      password: authCredentials.password,
    });
  }

  static async login(
    authCredentials: AuthCredentials
  ): Promise<AxiosResponse<AuthRes>> {
    return $api.post("/auth/login", {
      username: authCredentials.username,
      password: authCredentials.password,
    });
  }

  static async getUser(): Promise<AxiosResponse<GetUserRes>> {
    return $api.get("/user/get");
  }
}
