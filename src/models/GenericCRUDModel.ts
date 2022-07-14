import { Model as MongooseModel } from 'mongoose';
import IGenericCRUDModel from '../interfaces/IGenericCRUDModel';

abstract class GenericCRUDModel<T> implements IGenericCRUDModel<T> {
  constructor(protected mongooseModel: MongooseModel<T>) {}

  public create = async (data: T): Promise<T | null> => (
    this.mongooseModel.create(data)
  );

  public read = async (): Promise<T[]> => (
    this.mongooseModel.find()
  );

  public readOne = async (id: string): Promise<T | null> => (
    this.mongooseModel.findById(id)
  );

  public update = async (id: string, data: T): Promise<T | null> => (
    this.mongooseModel.findByIdAndUpdate(id, data, { new: true })
  );

  public delete = async (id: string): Promise<T | null> => (
    this.mongooseModel.findByIdAndRemove(id)
  );
}

export default GenericCRUDModel;