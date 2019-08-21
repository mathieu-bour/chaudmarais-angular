import {Address} from '../../models/address';

export class CacheAddresses {
  static readonly type = '[Addresses API] CacheAddresses';

  constructor(public addresses: Address[]) {
  }
}

export class GetUserAddresses {
  static readonly type = '[Users API] GetUserAddresses';

  constructor(public userId: number, public page = 0, public perPage = 100) {
  }
}

export class PostAddress {
  static readonly type = '[Addresses API] PostAddress';

  constructor(
    public userId: number,
    public name: string,
    public line1: string,
    public line2: string,
    public postalCode: string,
    public city: string,
    public country: string
  ) {
  }
}
