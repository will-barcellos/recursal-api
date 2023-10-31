import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router()

const createUserController = new CreateUserController
const authenticateUserController = new AuthenticateUserController

router.post('/user', createUserController.handle)
router.post('/login', authenticateUserController.handle)

export { router }