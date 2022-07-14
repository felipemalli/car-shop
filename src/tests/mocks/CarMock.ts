import { Car } from "../../interfaces/CarInterface";

export const carMock: Car = {
    model: 'Ferrari',
    year: 2002,
    color: 'red',
    buyValue: 5103000,
    doorsQty: 2,
    seatsQty: 2,
};

export const carWithIdMock = {
  ...carMock,
  _id: '111222333444555666777888'
} as Car & { _id: string };
