import { compare } from "bcrypt"
import { prisma } from "../database/database"
import { sign } from "jsonwebtoken"

type UserRequest = {
    username: string
    password: string
}

export class AuthenticateUserService {
    async execute({username, password}: UserRequest) {
        const UserAlreadyExist = await prisma.user.findFirst({
            where: {
                username
            }
        })

        if (!UserAlreadyExist) {
            throw new Error('User or password incorrect!')
        }

        const passwordMatch = await compare(password, UserAlreadyExist.password)

        if (!passwordMatch) {
            throw new Error('User or password incorrect')
        }

        const token = sign({}, '7c9025f1-dbef-4aba-b816-40ad7c5a6d59', {
            subject: UserAlreadyExist.id,
            expiresIn: '1d'
        })

        return { token }
    }
}