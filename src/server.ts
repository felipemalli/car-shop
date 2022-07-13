import CustomRouter from './routes/Router';
import App from './app';

import CarController from './controllers/CarController';

const server = new App();

const exampleController = new exampleController();

const exampleRouter = new CustomRouter<Car>();
exampleRouter.addRoute(exampleController);

server.addRouter(exampleRouter.router);

export default server;
