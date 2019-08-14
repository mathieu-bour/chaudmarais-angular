import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {SuccessResponse} from '../../responses/success.response';
import {map} from 'rxjs/operators';
import {PaginationResponse} from '../../responses/pagination.response';

export abstract class BaseClient<T> {
  protected readonly dates = ['created_at', 'updated_at'];

  protected constructor(
    protected http: HttpClient,
    protected base: string
  ) {
  }

  protected unserialize<U extends SuccessResponse<any>>(response: U) {
    this.dates.forEach(field => {
      if (response.data[field]) {
        response.data[field] = new Date(field);
      }
    });

    return response;
  }

  index(page: number = 0, perPage: number = 100) {
    return this.http.get<PaginationResponse<T[]>>(`${environment.api}/${this.base}?page=${page}&perPage=${perPage}`)
      .toPromise()
      .then(response => this.unserialize<PaginationResponse<T[]>>(response));
  }

  post(data: T) {
    return this.http.get<SuccessResponse<T>>(`${environment.api}/${this.base}`)
      .toPromise()
      .then(response => this.unserialize<SuccessResponse<T>>(response));
  }

  get(id: number | string) {
    return this.http.get<SuccessResponse<T>>(`${environment.api}/${this.base}/${id}`)
      .pipe(map(response => this.unserialize<SuccessResponse<T>>(response)));
  }

  patch(id: number | string, data: T) {
    return this.http.patch<SuccessResponse<T>>(`${environment.api}/${this.base}/${id}`, data)
      .pipe(map(response => this.unserialize<SuccessResponse<T>>(response)));
  }

}
