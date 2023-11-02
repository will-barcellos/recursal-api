import { Request, Response } from 'express'
import { AuthenticateUserService } from '../../services/Users/AuthenticateUserService'

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const sessionService = new AuthenticateUserService()

    try {
      const token = await sessionService.execute({
        email,
        password,
      })
      return response.status(200).json(token)
    } catch (err: any) {
      return response.status(401).json(err.message)
    }
  }
}
