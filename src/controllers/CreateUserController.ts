import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, username, password, email } = request.body

        const createUSerService = new CreateUserService
        const user = await createUSerService.execute({
            name,
            username, 
            password, 
            email
        })
        
        if (user instanceof Error) {
            return response.status(400).json(user.message)
        }

        return response.json(user)
        
    }
}