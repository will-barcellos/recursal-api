import { Request, Response } from 'express'
import { FindUserService } from '../services/FindUserService'

export class FindUserController {
  async handle(request: Request, response: Response) {
    const { username } = request.body

    const findUserController = new FindUserService()
    const user = await findUserController.execute({
      username,
    })

    if (user instanceof Error) {
      return response.status(400).json(user.message)
    }

    return response.json(user)
  }
}
