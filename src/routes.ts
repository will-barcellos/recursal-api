import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateUserController } from "./controllers/CreateUserController";
import { FindUserController } from "./controllers/FindUserController";

const router = Router()

const authenticateUserController = new AuthenticateUserController
const createUserController = new CreateUserController
const findUserController = new FindUserController

router.post('/login', authenticateUserController.handle)
router.post('/user', ensureAuthenticated, createUserController.handle)
router.get('/user', ensureAuthenticated ,findUserController.handle)

export { router }