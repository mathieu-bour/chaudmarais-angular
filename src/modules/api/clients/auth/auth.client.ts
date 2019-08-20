import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {SuccessResponse} from '../../responses/success.response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthClient {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<SuccessResponse<{token: string}>> {
    return this.http.post<SuccessResponse<{ token: string }>>(`${environment.api}/auth/login`, {email, password});
  }
}
