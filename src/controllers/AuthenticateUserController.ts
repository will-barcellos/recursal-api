import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const sessionService = new AuthenticateUserService()

    try {
      const token = await sessionService.execute({
        username,
        password,
      })
      return response.status(200).json(token)
    } catch (err: any) {
      return response.status(401).json(err.message)
    }
  }
}
