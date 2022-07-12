import { NextFunction, Request, Response } from 'express';
import { RequestWithBody, RequestWithBodyAndParam } from './IGenericRequests';

export default interface IGenericCRUDController<T> {
  create(req: RequestWithBody<T>, res: Response<T>, next: NextFunction)
  : Promise<Response | void>

  read(_req: Request, res: Response<T[]>, next: NextFunction)
  : Promise<Response | void>

  readOne(req: Request<{ id: string }>, res: Response<T>, next: NextFunction)
  : Promise<Response | void>

  update(
    req: RequestWithBodyAndParam<T, { id: string }>, res: Response<T>
    , next: NextFunction)
  : Promise<Response | void>
  
  delete(req: Request<{ id: string }>, res: Response<T>, next: NextFunction)
  : Promise<Response | void>;
}