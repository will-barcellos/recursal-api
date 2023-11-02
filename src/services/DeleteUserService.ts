import { prisma } from '../database/database'

type UserRequest = {
  email: string
}

export class DeleteUserService {
  async execute({ email }: UserRequest) {
    const emailDoesNotExist = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!emailDoesNotExist) {
      throw new Error('Record does not exists!')
    }

    const User = prisma.user.delete({
      where: {
        email,
      },
    })

    return User
  }
}
