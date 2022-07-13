import { Model as MongooseModel } from 'mongoose';
import IGenericCRUDModel from '../interfaces/IGenericCRUDModel';

abstract class GenericCRUDModel<T> implements IGenericCRUDModel<T> {
  constructor(protected mongooseModel: MongooseModel<T>) {}

  public async create(data: T): Promise<T> {
    return this.mongooseModel.create(data);
  }

  public async read(): Promise<T[]> {
    return this.mongooseModel.find();
  }

  public async readOne(id: string): Promise<T | null> {
    return this.mongooseModel.findById(id);
  }

  public async update(id: string, data: T): Promise<T | null> {
    return this.mongooseModel.findByIdAndUpdate(id, data, { new: true });
  }

  public async delete(id: string): Promise<T | null> {
    return this.mongooseModel.findByIdAndRemove(id);
  }
}

export default GenericCRUDModel;