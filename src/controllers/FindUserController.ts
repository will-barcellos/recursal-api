import { Request, Response } from "express";
import { findUserService } from "../services/findUserService";

export class FindUserController {
    async handle(request: Request, response: Response) {
        const { username } = request.body

        const findUserController = new findUserService
        const user = await findUserController.execute({
            username
        })

        if (user instanceof Error) {
            return response.status(400).json(user.message)
        }

        return response.json(user)
    }
}