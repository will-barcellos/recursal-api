import { Request, Response } from 'express'
import { CreateUserService } from '../../services/Users/CreateUserService'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, password, email } = request.body

    const createUserService = new CreateUserService()

    try {
      await createUserService.execute({
        name,
        password,
        email,
      })
      return response.status(200).json('Record created successfully!')
    } catch (err: any) {
      return response.status(409).json(err.message)
    }
  }
}
