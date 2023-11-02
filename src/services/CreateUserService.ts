import { hash } from 'bcrypt'
import { prisma } from '../database/database'

type UserRequest = {
  name: string
  username: string
  password: string
  email: string
}

export class CreateUserService {
  async execute({ name, username, password, email }: UserRequest) {
    const UserAlreadyExist = await prisma.user.findFirst({
      where: {
        username,
      },
    })

    if (UserAlreadyExist) {
      throw new Error('User already exists!')
    }

    const passwordHash = await hash(password, 8)

    const User = prisma.user.create({
      data: {
        name,
        username,
        password: passwordHash,
        email,
      },
    })

    return User
  }
}
