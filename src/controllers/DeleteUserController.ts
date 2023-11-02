import { Request, Response } from 'express'
import { DeleteUserService } from '../services/DeleteUserService'

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { username } = request.body

    const deleteUserService = new DeleteUserService()
    const user = await deleteUserService.execute({
      username,
    })

    if (user instanceof Error) {
      return response.status(400).json(user.message)
    }

    return response.json(user)
  }
}
