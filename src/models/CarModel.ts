/* eslint-disable max-len */
import { Model } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import GenericCRUDMongoModel from './GenericCRUDMongoModel';
import carMongooseModel from './schemas/CarSchema';

class CarModel extends GenericCRUDMongoModel<Car> {
  constructor(protected modelMongoose: Model<Car> = carMongooseModel) {
    super(modelMongoose);
  }
}

export default CarModel;
