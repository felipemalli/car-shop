import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../utils/errors';
import Messages from '../utils/Messages';
import StatusCodes from '../utils/StatusCodes';

class ErrorMiddleware {
  constructor(
    private statusCode: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR,
    private message: string = Messages.INTERNAL_SERVER_ERROR,
  ) { }

  public handle = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    _next.name.toLowerCase();

    if (err instanceof CustomError) {
      this.statusCode = err.statusCode;
      this.message = err.message;
    }

    return res.status(this.statusCode).json({ error: this.message });
  };
}

export default new ErrorMiddleware();