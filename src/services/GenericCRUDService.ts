import IGenericCRUDModel from '../interfaces/IGenericCRUDModel';
import IGenericCRUDService from '../interfaces/IGenericCRUDService';
import { NotFoundError } from '../utils/errors';

abstract class GenericCRUDService<T> implements IGenericCRUDService<T> {
  constructor(protected model: IGenericCRUDModel<T>) { }

  public create = async (data: T): Promise<T | null> => this.model.create(data);

  public read = async (): Promise<T[]> => this.model.read();

  public readOne = async (id: string): Promise<T | null> => {
    const object = this.model.readOne(id);
    if (!object) {
      throw new NotFoundError();
    } 

    return object;
  };

  public update = async (id: string, payload: T): Promise<T | null> => {
    const updatedObject = this.model.update(id, payload);
    if (!updatedObject) throw new NotFoundError();

    return updatedObject;
  };

  public delete = async (id: string): Promise<void> => {
    const object = await this.readOne(id);
    if (!object) throw new NotFoundError();

    this.model.delete(id);
  };
}

export default GenericCRUDService;