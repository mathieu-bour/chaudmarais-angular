import {AppStateContext, AppStateModel} from './app.state.model';
import {Action, State} from '@ngxs/store';
import {HasClicked} from './app.actions';

@State<AppStateModel>({
  name: 'app',
  defaults: {
    grpd: false
  }
})

export class AppState {
  @Action(HasClicked)
  hasClicked(ctx: AppStateContext) {
    ctx.patchState({
      grpd: true
    });
  }
}
