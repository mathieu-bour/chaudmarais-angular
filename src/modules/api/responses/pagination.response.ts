import {SuccessResponse} from './success.response';

export interface PaginationResponse<T> extends SuccessResponse<T> {
  page: number;
  per_page: number;
  total: number;
}
