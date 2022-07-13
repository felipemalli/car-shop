import ResponseMessages from '../ResponseMessages';
import StatusCodes from '../StatusCodes';
import CustomError from './CustomError';

class NotFoundError extends CustomError {
  constructor(message: string = ResponseMessages.OBJECT_NOT_FOUND) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export default NotFoundError;