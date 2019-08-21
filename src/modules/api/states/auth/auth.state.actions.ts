import {User} from '../../models/user';

export class Login {
  static readonly type = '[Auth] Login';

  constructor(public email: string, public password: string) {
  }
}

export class Logout {
  static readonly type = '[Auth] Logout';

  constructor() {
  }
}

export class GetLoggedUser {
  static readonly type = '[Auth] GetLoggedUser';

  constructor() {
  }
}

export class SetLoggedUser {
  static readonly type = '[Auth] SetLoggedUser';

  constructor(public user: User) {
  }
}
