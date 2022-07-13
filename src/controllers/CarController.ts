import { Car } from '../interfaces/CarInterface';
import CarService from '../services/CarService';
import GenericCRUDService from '../services/GenericCRUDService';
import GenericCRUDController from './GenericCRUDController';

export default class CarController extends GenericCRUDController<Car> {
  private $route: string;

  constructor(
    service: GenericCRUDService<Car> = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this.$route = route;
  }

  get route() { return this.$route; }
}
