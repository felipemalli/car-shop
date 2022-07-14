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