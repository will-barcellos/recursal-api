import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { prisma } from '../../database/database'

type UserRequest = {
  email: string
  password: string
}

export class AuthenticateUserService {
  async execute({ email, password }: UserRequest) {
    const userExist = await prisma.user.findUnique({
      where: {
        email,
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
      expiresIn: '7d',
    })

    return token
  }
}
