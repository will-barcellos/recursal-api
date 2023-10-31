import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router()

const createUserController = new CreateUserController
const authenticateUserController = new AuthenticateUserController

router.post('/user', ensureAuthenticated, createUserController.handle)
router.post('/login', authenticateUserController.handle)

// Teste
router.get('/clients', ensureAuthenticated,(request, response) => {
    return response.json([
        {id: 1, name: "João"},
        {id: 2, name: "Carlos"},
        {id: 3, name: "Maria"},
        {id: 4, name: "Claudia"},
    ])
})

export { router }