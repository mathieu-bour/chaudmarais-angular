export class GetUserAddresses {
  static readonly type = '[Users API] GetUserAddresses';

  constructor(public userId: number, public page = 0, public perPage = 100) {
  }
}

export class AddNewAddress {
  static readonly type = '[Users API] AddNewAddress';

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
