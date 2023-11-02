import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, username, password, email } = request.body

    const createUSerService = new CreateUserService()

    try {
      await createUSerService.execute({
        name,
        username,
        password,
        email,
      })
      return response.status(200).json('Record created successfully!')
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
