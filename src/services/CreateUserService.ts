import { hash } from 'bcrypt'
import { prisma } from '../database/database'

type UserRequest = {
  name: string
  password: string
  email: string
}

export class CreateUserService {
  async execute({ name, password, email }: UserRequest) {
    const userExist = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (userExist) {
      throw new Error('This email is already associated with an account!')
    }

    const passwordHash = await hash(password, 8)

    const User = prisma.user.create({
      data: {
        name,
        password: passwordHash,
        email,
      },
    })

    return User
  }
}
