import StatusCodes from '../StatusCodes';
import CustomError from './CustomError';

class BadRequestError extends CustomError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export default BadRequestError;