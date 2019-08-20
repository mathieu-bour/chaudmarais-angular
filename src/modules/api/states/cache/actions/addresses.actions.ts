export class GetUserAddresses {
  static readonly type = '[Users API] GetUserAddresses';

  constructor(public userId: number, public page = 0, public perPage = 100) {
  }
}
