import { NextFunction, Request, Response } from 'express';
import IGenericCRUDController from '../interfaces/IGenericCRUDController';
import IGenericCRUDService from '../interfaces/IGenericCRUDService';
import {
  RequestWithBody,
  RequestWithBodyAndParam
} from '../interfaces/IGenericRequests';
import StatusCodes from '../utils/StatusCodes';

abstract class GenericCRUDController<T> implements IGenericCRUDController<T> {
  constructor(protected service: IGenericCRUDService<T>) { }

  public async create(
    req: RequestWithBody<T>,
    res: Response<T>,
    next: NextFunction,
  ): Promise<typeof res | void> {
    try {
      const createdObject = await this.service.create(req.body);
      return res.status(StatusCodes.CREATED).json(createdObject);
    } catch (error) {
      next(error);
    }
  }
  
  public async read(
    _req: Request,
    res: Response<T[]>,
    next: NextFunction,
  ): Promise<typeof res | void> {
    try {
      const foundedObjects = await this.service.read();
      return res.status(StatusCodes.OK).json(foundedObjects);
    } catch (error) {
      next(error);
    }
  } 
  
  public async readOne(
    req: Request<{ id: string }>,
    res: Response<T>,
    next: NextFunction,
  ): Promise<typeof res | void> {
    try {
      const foundedObject = await this.service.readOne(req.params.id);
      return res.status(StatusCodes.OK).json(foundedObject);
    } catch (error) {
      next(error);
    }
  }
  
  public async update(
    req: RequestWithBodyAndParam<T, { id: string }>,
    res: Response<T>,
    next: NextFunction,
  ): Promise<typeof res | void> {
    try {
      const updatedObject = await this.service.update(req.params.id, req.body);
      return res.status(StatusCodes.OK).json(updatedObject);
    } catch (error) {
      next(error);
    }
  }
  
  public async delete(
    req: Request<{ id: string }>,
    res: Response<T>,
    next: NextFunction,
  ): Promise<typeof res | void> {
    try {
      await this.service.delete(req.params.id);
      return res.status(StatusCodes.NO_CONTENT).end();
    } catch (error) {
      next(error);
    }
  }
}

export default GenericCRUDController;