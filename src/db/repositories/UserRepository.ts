import prisma from '../prismaClient'

export default class UserRepository {
  static async findAllUsers() {
    return await prisma.user.findMany()
  }
  static async findUserById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
    })
  }
  static async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    })
  }

  static async findUserWithPostsById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      include: { posts: true },
    })
  }

  static async findUserWithProfileById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      include: { profile: true },
    })
  }
  static async createUser(data: { email: string; name?: string }) {
    return await prisma.user.create({
      data,
    })
  }
}
