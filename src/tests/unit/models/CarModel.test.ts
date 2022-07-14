import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon, { SinonStub } from 'sinon';
import CarModel from '../../../models/CarModel';
import { carsMock } from '../../mocks/CarMock';

describe('Test car model', () => {
  describe('Test create car in model', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(carsMock[0])
    });

    after(() => {
      (Model.create as SinonStub). restore();
    });

    it('Success create car', async () => {
      const carModel = new CarModel();
      const createdCar = await carModel.create(carsMock[0]);
      expect(createdCar).to.be.equal(carsMock[0]);
    });
  });
});