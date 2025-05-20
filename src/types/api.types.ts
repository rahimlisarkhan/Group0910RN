import { HttpStatusCode } from 'axios';

export interface IResponse<T> {
  data: T;
  message: string;
  result: boolean;
  status?: HttpStatusCode;
}
