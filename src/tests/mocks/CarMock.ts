import { Car } from "../../interfaces/CarInterface";

export const carsMock: Car[] = [
  {
    model: 'Ferrari',
    year: 2002,
    color: 'red',
    buyValue: 5103000,
    doorsQty: 2,
    seatsQty: 2,
  },
  {
    model: 'Fusca',
    year: 1985,
    color: 'yellow',
    buyValue: 120000,
    doorsQty: 4,
    seatsQty: 5,
  }
]

export const carWithIdMock = {
  ...carsMock[0],
  _id: 'carId'
} as Car & { _id: string };
