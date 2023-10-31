import { prisma } from "../database/database"

type UserRequest = {
    username: string
}

export class DeleteUserService {
    async execute({ username }:UserRequest) {
        
        const User = prisma.user.delete({
            where: {
                username
            }
        })

        if (!User) {
            throw new Error('User does not exists!')
        }

        return User

    }
}