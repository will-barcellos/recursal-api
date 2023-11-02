import { Request, Response } from 'express'
import { DeleteUserService } from '../services/DeleteUserService'

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { username } = request.body

    const deleteUserService = new DeleteUserService()
    try {
      await deleteUserService.execute({
        username,
      })
      return response.status(200).json('Record deleted successfully!')
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
