import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {SuccessResponse} from '../../responses/success.response';
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
    return this.http.get<PaginationResponse<T[]>>(`${environment.api}${this.base}?page=${page}&perPage=${perPage}`)
      .toPromise()
      .then(response => this.unserialize<PaginationResponse<T[]>>(response));
  }

  post(data: any) {
    return this.http.post<SuccessResponse<T>>(`${environment.api}${this.base}`, data)
      .toPromise()
      .then(response => this.unserialize<SuccessResponse<T>>(response));
  }

  get(id: number | string) {
    return this.http.get<SuccessResponse<T>>(`${environment.api}${this.base}/${id}`)
      .toPromise()
      .then(response => this.unserialize<SuccessResponse<T>>(response));
  }

  patch(id: number | string, data: any) {
    return this.http.patch<SuccessResponse<T>>(`${environment.api}${this.base}/${id}`, data)
      .toPromise()
      .then(response => this.unserialize<SuccessResponse<T>>(response));
  }

}
