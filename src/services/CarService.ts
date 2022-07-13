import { Car, CarZodSchema } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';
import GenericCRUDModel from '../models/GenericCRUDModel';
import { BadRequestError, NotFoundError } from '../utils/errors';
import Messages from '../utils/Messages';
import GenericCRUDService from './GenericCRUDService';

class CarService extends GenericCRUDService<Car> {
  constructor(protected model: GenericCRUDModel<Car> = new CarModel()) {
    super(model);
  }

  async create(car: Car): Promise<Car | null> {
    const parsed = CarZodSchema.safeParse(car);

    if (!parsed.success) {
      throw new BadRequestError(String(parsed.error));
    }

    return this.model.create(car);
  }
    
  async update(id: string, car: Car): Promise<Car | null> {
    const parsed = CarZodSchema.safeParse(car);
    
    if (!parsed.success) {
      throw new BadRequestError(String(parsed.error));
    }

    return this.model.update(id, car);
  }

  public async delete(id: string): Promise<void> {
    const HEXADECIMAL_LENGTH = 24;
  
    if (id.length < HEXADECIMAL_LENGTH) {
      throw new BadRequestError(Messages.HEXADECIMAL_ID);
    }
    
    const car = await this.readOne(id);
    if (!car) throw new NotFoundError();

    this.model.delete(id);
  }
}

export default CarService;
