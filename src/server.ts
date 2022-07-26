import App from './app';
import CustomRouter from './routes/Router';

import CarController from './controllers/CarController';
import { Car } from './interfaces/CarInterface';

const server = new App();

const carController = new CarController();

const carRouter = new CustomRouter<Car>();
carRouter.addRoute(carController);

server.addRouter(carRouter.router);

server.handleError();

export default server;
