import { Request, Response } from 'express'
import { FindUserService } from '../services/FindUserService'

export class FindUserController {
  async handle(request: Request, response: Response) {
    const findUserController = new FindUserService()

    try {
      const user = await findUserController.execute()
      return response.status(200).json(user)
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
