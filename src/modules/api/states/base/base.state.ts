import {StateContext} from '@ngxs/store';

export abstract class BaseState {
  cache(ctx: StateContext<any[]>, fresh: any[]) {
    const freshIds = fresh.map(model => model.id);
    const existing = ctx.getState().filter(model => freshIds.indexOf(model.id) === -1);
    ctx.setState([...existing, ...fresh]);
  }
}
