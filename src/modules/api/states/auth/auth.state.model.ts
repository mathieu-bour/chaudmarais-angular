import {User} from '../../models/user';

export interface AuthStateModel {
  token: string;
  token_payload: {
    iss: string,
    sub: number,
    aud: string,
    exp: number,
    nbf: number,
    iat: number,
    jti: string
  };
  user: User;
}
