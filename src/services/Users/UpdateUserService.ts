import { hash } from 'bcrypt'
import { prisma } from '../../database/database'

type UserRequest = {
  name: string
  password: string
  email: string
}

export class UpdateUserService {
  async execute({ name, password, email }: UserRequest) {
    const emailDoesNotExist = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!emailDoesNotExist) {
      throw new Error('Record does not exists!')
    }

    const passwordHash = await hash(password, 8)

    const User = prisma.user.update({
      where: {
        email,
      },
      data: {
        name,
        password: passwordHash,
        email,
      },
    })

    return User
  }
}
