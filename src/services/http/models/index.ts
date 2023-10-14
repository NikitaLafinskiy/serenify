export interface AuthRes {
  user: User;
  accessToken: string;
  refreshTokenId: string;
}

export interface GetUserRes {
  user: User;
  options: Options;
}

export interface UpdateOptionsRes {
  optionsUpdate: Options;
}

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Options {
  breaths: number;
  inhale: number;
  exhale: number;
  hold: number;
}
