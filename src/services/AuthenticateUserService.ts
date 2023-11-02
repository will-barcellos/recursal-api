import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { prisma } from '../database/database'

type UserRequest = {
  username: string
  password: string
}

export class AuthenticateUserService {
  async execute({ username, password }: UserRequest) {
    const userExist = await prisma.user.findFirst({
      where: {
        username,
      },
    })

    if (!userExist) {
      throw new Error('Invalid Credentials!')
    }

    const passwordCompare = await compare(password, userExist.password)

    if (!passwordCompare) {
      throw new Error('Invalid Credentials!')
    }

    const token = sign({}, '7c9025f1-dbef-4aba-b816-40ad7c5a6d59', {
      subject: userExist.id,
      expiresIn: '1d',
    })

    return token
  }
}
