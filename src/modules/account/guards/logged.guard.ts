import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthState} from '../../api/states/auth/auth.state';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  @Select(AuthState.isLogged) isLogged$: Observable<boolean>;

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isLogged$;
  }
}
