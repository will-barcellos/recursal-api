import { Router } from 'express'
import { AuthenticateUserController } from './controllers/Users/AuthenticateUserController'
import { CreateUserController } from './controllers/Users/CreateUserController'
import { DeleteUserController } from './controllers/Users/DeleteUserController'
import { ReadUserController } from './controllers/Users/ReadUserController'
import { UpdateUserController } from './controllers/Users/UpdateUserController'
import { EnsureAuthenticated } from './middlewares/EnsureAuthenticated'

export const router = Router()

router.post('/login', new AuthenticateUserController().handle)

router.get('/user/get', EnsureAuthenticated, new ReadUserController().handle)

router.post(
  '/user/create',
  EnsureAuthenticated,
  new CreateUserController().handle,
)

router.post(
  '/user/delete',
  EnsureAuthenticated,
  new DeleteUserController().handle,
)

router.post(
  '/user/update',
  EnsureAuthenticated,
  new UpdateUserController().handle,
)
