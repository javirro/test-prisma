import prisma from '../prismaClient'

export default class LikesRepository {
  static async likePost(userId: number, postId: number) {
    return await prisma.likes.create({
      data: {
        userId,
        postId,
      },
    })
  }

  static async findLikesByUserId(userId: number) {
    return await prisma.likes.findMany({
      where: {
        userId,
      },
      select: {
        postId: true,
      },
    })
  }

  static async findLikesByPostId(postId: number) {
    return await prisma.likes.findMany({
      where: {
        postId,
      },
      select: {
        userId: true,
      },
    })
  }
}
