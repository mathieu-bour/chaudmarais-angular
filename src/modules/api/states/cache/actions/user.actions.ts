export class PostUser {
  static readonly type = '[Users] Register a new User';

  constructor(public name: string, public email: string, public password: string) {
  }
}
