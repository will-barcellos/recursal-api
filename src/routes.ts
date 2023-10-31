import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { EnsureAuthenticated } from "./middlewares/EnsureAuthenticated";
import { CreateUserController } from "./controllers/CreateUserController";
import { FindUserController } from "./controllers/FindUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";

const router = Router()

const authenticateUserController = new AuthenticateUserController
const createUserController = new CreateUserController
const findUserController = new FindUserController
const deleteUserController = new DeleteUserController

router.post('/login', authenticateUserController.handle)

router.post('/user/create', EnsureAuthenticated, createUserController.handle)
router.post('/user/delete', EnsureAuthenticated, deleteUserController.handle)
router.get('/user/get', EnsureAuthenticated, findUserController.handle)

export { router }