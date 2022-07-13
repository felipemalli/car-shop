import IGenericCRUDModel from '../interfaces/IGenericCRUDModel';
import IGenericCRUDService from '../interfaces/IGenericCRUDService';
import { NotFoundError } from '../utils/errors';

abstract class GenericCRUDService<T> implements IGenericCRUDService<T> {
  constructor(protected model: IGenericCRUDModel<T>) { }

  public async create(data: T): Promise<T | null> {
    return this.model.create(data);
  }

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  public async readOne(id: string): Promise<T | null> {
    const object = this.model.readOne(id);
    if (!object) throw new NotFoundError();

    return object;
  }

  public async update(id: string, payload: T): Promise<T | null> {
    const updatedObject = this.model.update(id, payload);
    if (!updatedObject) throw new NotFoundError();

    return updatedObject;
  }

  public async delete(id: string): Promise<void> {
    const object = await this.readOne(id);
    if (!object) throw new NotFoundError();

    this.model.delete(id);
  }
}

export default GenericCRUDService;