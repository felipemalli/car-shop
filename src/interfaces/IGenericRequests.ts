import { Request } from 'express';

export interface RequestWithBody<T> extends Request {
  body: T;
}

export interface RequestWithBodyAndParam<T, Y> extends Request<Y> {
  body: T;
}