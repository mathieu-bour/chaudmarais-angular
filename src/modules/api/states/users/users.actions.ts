export class PostUser {
  static readonly type = '[Users API] PostUser';

  constructor(
    public data: any
  ) {
  }
}

export class PatchUser {
  static readonly type = '[Users API] PatchUser';

  constructor(
    public userId: number,
    public data: any
  ) {
  }
}

export class GetLoggedUserAddresses {
  static readonly type = '[Users API] GetLoggedUserAddresses';

  constructor(public page = 0, public perPage = 100) {
  }
}
