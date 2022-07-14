import { NextFunction, Request, Response } from 'express';
import IGenericCRUDController from '../interfaces/IGenericCRUDController';
import {
  RequestWithBody,
  RequestWithBodyAndParam,
} from '../interfaces/IGenericRequests';
import GenericCRUDService from '../services/GenericCRUDService';
import StatusCodes from '../utils/StatusCodes';

abstract class GenericCRUDController<T> implements IGenericCRUDController<T> {
  constructor(protected service: GenericCRUDService<T>) { }

  public abstract get route(): string;

  public create = async (
    req: RequestWithBody<T>,
    res: Response<T>,
    next: NextFunction,
  ): Promise<typeof res | void> => {
    try {
      const createdObject = await this.service.create(req.body);
      return res.status(StatusCodes.CREATED).json(createdObject || undefined);
    } catch (error) {
      next(error);
    }
  };
  
  public read = async (
    _req: Request,
    res: Response<T[]>,
    next: NextFunction,
  ): Promise<typeof res | void> => {
    try {
      const foundedObjects = await this.service.read();
      return res.status(StatusCodes.OK).json(foundedObjects);
    } catch (error) {
      next(error);
    }
  }; 
  
  public readOne = async (
    req: Request<{ id: string }>,
    res: Response<T>,
    next: NextFunction,
  ): Promise<typeof res | void> => {
    try {
      const foundedObject = await this.service.readOne(req.params.id);

      return res.status(StatusCodes.OK).json(foundedObject || undefined);
    } catch (error) {
      next(error);
    }
  };
  
  public update = async (
    req: RequestWithBodyAndParam<T, { id: string }>,
    res: Response<T>,
    next: NextFunction,
  ): Promise<typeof res | void> => {
    try {
      const updatedObject = await this.service.update(req.params.id, req.body);
      return res.status(StatusCodes.OK).json(updatedObject || undefined);
    } catch (error) {
      next(error);
    }
  };
  
  public delete = async (
    req: Request<{ id: string }>,
    res: Response<T>,
    next: NextFunction,
  ): Promise<typeof res | void> => {
    try {
      await this.service.delete(req.params.id);
      return res.status(StatusCodes.NO_CONTENT).end();
    } catch (error) {
      next(error);
    }
  };
}

export default GenericCRUDController;