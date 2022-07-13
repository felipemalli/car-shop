/* eslint-disable max-len */
import { Model } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import GenericCRUDModel from './GenericCRUDModel';
import carMongooseModel from './schemas/CarSchema';

class CarModel extends GenericCRUDModel<Car> {
  constructor(protected modelMongoose: Model<Car> = carMongooseModel) {
    super(modelMongoose);
  }
}

export default CarModel;
