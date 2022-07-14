import { Car, CarZodSchema } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';
import GenericCRUDModel from '../models/GenericCRUDModel';
import { BadRequestError, NotFoundError } from '../utils/errors';
import Messages from '../utils/Messages';
import GenericCRUDService from './GenericCRUDService';

class CarService extends GenericCRUDService<Car> {
  constructor(model: GenericCRUDModel<Car> = new CarModel()) {
    super(model);
  }

  private checkHexadecimal = (id: string) => {
    const HEXADECIMAL_LENGTH = 24;
    
    if (id.length < HEXADECIMAL_LENGTH) {
      throw new BadRequestError(Messages.HEXADECIMAL_ID);
    }
  };

  public readOne = async (id: string): Promise<Car | null> => {
    this.checkHexadecimal(id);

    const object = this.model.readOne(id);
    if (!object) {
      throw new NotFoundError();
    } 

    return object;
  };

  public create = async (car: Car): Promise<Car | null> => {
    const parsed = CarZodSchema.safeParse(car);

    if (!parsed.success) {
      throw new BadRequestError(String(parsed.error));
    }

    return this.model.create(car);
  };
    
  public update = async (id: string, car: Car): Promise<Car | null> => {
    this.checkHexadecimal(id);

    const parsed = CarZodSchema.safeParse(car);
    
    if (!parsed.success) {
      throw new BadRequestError(String(parsed.error));
    }

    return this.model.update(id, car);
  };

  public delete = async (id: string): Promise<void> => {
    this.checkHexadecimal(id);

    const car = await this.readOne(id);
    if (!car) throw new NotFoundError();

    this.model.delete(id);
  };
}

export default CarService;
