import { prisma } from '../../database/database'

export class ReadUserService {
  async execute() {
    const user = await prisma.user.findMany({
      select: {
        id: false,
        name: true,
        password: false,
        email: true,
        createdAt: false,
        updatedAt: false,
      },
    })

    if (!user) {
      throw new Error('Records does not exists!')
    }

    return user
  }
}
