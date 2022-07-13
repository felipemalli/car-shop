import Messages from '../Messages';
import StatusCodes from '../StatusCodes';
import CustomError from './CustomError';

class NotFoundError extends CustomError {
  constructor(message: string = Messages.OBJECT_NOT_FOUND) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export default NotFoundError;