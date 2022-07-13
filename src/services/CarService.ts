// import { isValidObjectId } from 'mongoose';
// import { Car, CarZodSchema } from '../interfaces/CarInterface';
// import { Model } from '../interfaces/ModelInterface';
// import { Service } from '../interfaces/ServiceInterface';
// import { BadRequestError, NotFoundError } from '../utils/errors';
// import CarModel from '../models/CarModel';
// import Messages from '../utils/Messages';

// export const carModel = new CarModel();

// class CarService implements Service<Car> {
//   constructor(protected model: IGenericCRUDService<T>) { }

//   private checkValidId = (id: string) => {
//     if (!isValidObjectId(id)) {
//       throw new BadRequestError(Messages.ID_HEXADECIMAL);
//     }
//   };

//   public read = async () => this.model.read();

//   public create = async (data: Car) => {
//     const parsed = CarZodSchema.safeParse(data);
//     if (!parsed.success) {
//       throw new BadRequestError(Messages.INVALID_FIELDS);
//     }

//     return this.model.create(data);
//   };

//   public readOne = async (id: string) => {
//     this.checkValidId(id);

//     const car = await this.model.readOne(id);
//     if (!car) {
//       throw new NotFoundError(Messages.OBJECT_NOT_FOUND);
//     }

//     return car;
//   };

//   public update = async (id: string, data: Car) => {
//     this.checkValidId(id);

//     const parsed = CarZodSchema.safeParse(data);
//     if (!parsed.success) {
//       throw new BadRequestError(Messages.INVALID_FIELDS);
//     }

//     const car = await this.model.update(id, data);
//     if (!car) {
//       throw new NotFoundError(Messages.OBJECT_NOT_FOUND);
//     }

//     return car;
//   };

//   public delete = async (id: string) => {
//     this.checkValidId(id);

//     const car = await this.model.delete(id);
//     if (!car) {
//       throw new NotFoundError(Messages.OBJECT_NOT_FOUND);
//     }
//   };
// }

// export default CarService;