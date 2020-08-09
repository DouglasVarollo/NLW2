import { Router } from "express";

import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
import SessionsController from "./controllers/SessionsController";
import UsersController from "./controllers/UsersController";

const routes = Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const sessionsController = new SessionsController();
const usersController = new UsersController();

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

routes.post("/sessions", sessionsController.create);

routes.post("/users", usersController.create);

export default routes;
