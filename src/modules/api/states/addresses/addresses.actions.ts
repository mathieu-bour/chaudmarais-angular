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

  constructor(public data: Partial<Address>) {
  }
}

export class PatchAddress {
  static readonly type = '[Addresses API] PatchAddress';

  constructor(public id: number, public data: Partial<Address>) {
  }
}
