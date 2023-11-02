import { Request, Response } from 'express'
import { UpdateUserService } from '../../services/Users/UpdateUserService'

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { name, password, email } = request.body

    const updateUserService = new UpdateUserService()
    try {
      await updateUserService.execute({
        name,
        password,
        email,
      })
      return response.status(200).json('Record updates successfully!')
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
