import { model, Schema } from 'mongoose';
import { Car } from '../../interfaces/CarInterface';

const CarSchema = new Schema<Car>({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: { type: String },
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
}, { versionKey: false });

const carMongooseModel = model<Car>('Car', CarSchema);

export default carMongooseModel;