export default interface IGenericCRUDService<T> {
  create(data: T): Promise<T | null>;

  read(): Promise<T[]> 

  readOne(id: string): Promise<T | null>

  update(id: string, data: T): Promise<T | null>;

  delete(id: string): Promise<void>;
}