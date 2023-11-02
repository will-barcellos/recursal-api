import { prisma } from '../database/database'

type UserRequest = {
  username: string
}

export class DeleteUserService {
  async execute({ username }: UserRequest) {
    const UserDoesNotExist = await prisma.user.findFirst({
      where: {
        username,
      },
    })

    if (!UserDoesNotExist) {
      throw new Error('Record does not exists!')
    }

    const User = prisma.user.delete({
      where: {
        username,
      },
    })

    return User
  }
}
