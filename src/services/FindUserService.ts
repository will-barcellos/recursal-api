import { prisma } from "../database/database"

type UserRequest = {
    username: string
}

export class FindUserService {
    async execute({username}: UserRequest) {
        const user = await prisma.user.findMany({
            where: {
                username
            },
            select: {
                id: false,
                name: true,
                username: true,
                password: false,
                email: true,
                createdAt: false,
                updatedAt: false
            }
        })

        if (!user) {
            throw new Error('User does not exists!')
        }

        return user
    }
}