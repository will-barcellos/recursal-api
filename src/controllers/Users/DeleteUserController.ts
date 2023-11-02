import { Request, Response } from 'express'
import { DeleteUserService } from '../../services/Users/DeleteUserService'

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { email } = request.body

    const deleteUserService = new DeleteUserService()
    try {
      await deleteUserService.execute({
        email,
      })
      return response.status(200).json('Record deleted successfully!')
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
