import { Car } from '../interfaces/CarInterface';
import CarService from '../services/CarService';
import GenericCRUDController from './GenericCRUDController';

export default class CarController extends GenericCRUDController<Car> {
  private $route: string;

  private $idRoute: string;

  constructor(
    service = CarService,
    route = '/cars',
  ) {
    super(service);
    this.$route = route;
    this.$idRoute = `${this.$route}/:id`;
  }

  get route() { return this.$route; }

  get idRoute() { return this.$idRoute; }
}
