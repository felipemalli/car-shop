import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon, { SinonStub } from 'sinon';
import CarModel from '../../../models/CarModel';
import { carMock } from '../../mocks/CarMock';

describe('Test car model', () => {
  describe('Test create car in model', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(carMock)
    });

    after(() => {
      (Model.create as SinonStub). restore();
    });

    it('Success create car', async () => {
      const carModel = new CarModel();
      const createdCar = await carModel.create(carMock);
      expect(createdCar).to.be.equal(carMock);
    });
  });
});

// describe('Test car service', () => {
//   describe('Test create car in service',() => {
//     before(() => {
//       sinon.stub(Model, 'create').resolves(carWithIdMock);
//     });

//     after(() => {
//       (Model.create as SinonStub).restore();
//     });

//     it('Success create car', async () => {
//       const carService = new CarService();
//       const createdCar = await carService.create(carMock);

//       expect(createdCar).to.be.equal(carWithIdMock);
//     });
//   });

//   describe('Test read cars in service', () => {
//     before(() => {
//       sinon.stub(Model, 'find').resolves([carWithIdMock]);
//     });

//     after(() => {
//       (Model.find as SinonStub).restore()
//     });

//     it('Success find all cars', async () => {
//       const carService = new CarService();
//       const cars = await carService.read();

//       expect(cars).to.be.deep.equal([carWithIdMock]);
//     });
//   });

//   describe('Test read a car by id in service', () => {
//     before(() => {
//       sinon.stub(Model, 'findById').resolves(carWithIdMock);
//     });

//     after(() => {
//       (Model.findById as SinonStub).restore()
//     });

//     it('Success list car by id', async () => {
//       const carService = new CarService();
//       const car = await carService.readOne(carWithIdMock._id);

//       expect(car).to.be.equal(carWithIdMock);
//     });
//   })

//   describe('Test update a car in service',() => {
//     before(() => {
//       sinon.stub(Model, 'findByIdAndUpdate').resolves(carWithIdMock);
//       sinon.stub(Model, 'findById').resolves(carWithIdMock);
//     });

//     after(() => {
//       (Model.findByIdAndUpdate as SinonStub).restore();
//       (Model.findById as SinonStub).restore();
//     });

//     it('Success create car', async () => {
//       const carService = new CarService();
//       const createdCar = await carService.update(carWithIdMock._id, carMock);

//       expect(createdCar).to.be.equal(carWithIdMock);
//     });
//   });

//   describe('Test delete a car in service',() => {
//     before(() => {
//       sinon.stub(Model, 'delete');
//     });

//     after(() => {
//       (Model.findByIdAndUpdate as SinonStub).restore();
//     });

//     it('Success delete car', async () => {
//       const carService = new CarService();
//       const deletedCar = await carService.delete(carWithIdMock._id);
      
//       expect(deletedCar).to.be.undefined;
//     });
//   });
// });