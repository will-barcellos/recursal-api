import { Request, Response } from 'express'
import { ReadUserService } from '../../services/Users/ReadUserService'

export class ReadUserController {
  async handle(request: Request, response: Response) {
    const findUserController = new ReadUserService()

    try {
      const user = await findUserController.execute()
      return response.status(200).json(user)
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
