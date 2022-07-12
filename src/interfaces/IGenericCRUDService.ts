export default interface IGenericCRUDService<T> {
  create: (data: T) => Promise<T>;

  read: () => Promise<T[]> 

  readOne: (id: string) => Promise<T>

  update: (id: string, data: T) => Promise<T>;

  delete: (id: string) => Promise<void>;
}