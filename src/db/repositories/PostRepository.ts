import prisma from '../prismaClient'

export default class PostRepository {
  static async findAllPosts() {
    return await prisma.post.findMany()
  }

  static async findPostById(id: number) {
    return await prisma.post.findUnique({
      where: { id },
    })
  }

  static async findAllPostsByUserId(userId: number) {
    return await prisma.post.findMany({
      where: { authorId: userId },
    })
  }

  static async createPost(data: { title: string; content: string; authorId: number }) {
    return await prisma.post.create({
      data,
    })
  }

  static async updatePost(id: number, data: { title?: string; content?: string }) {
    return await prisma.post.update({
      where: { id },
      data,
    })
  }

  static async deletePost(id: number) {
    return await prisma.post.delete({
      where: { id },
    })
  }
}
