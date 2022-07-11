import * as z from 'zod';
import { VehicleSchema } from './VehicleInterface';

const CarZodSchema = VehicleSchema.extend({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});

type Car = z.infer<typeof CarZodSchema>;

export { Car, CarZodSchema };
