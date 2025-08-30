import { Post } from '../../generated/prisma'
import PostRepository from '../db/repositories/PostRepository'

export const createPost = async (title: string, content: string, userId: number) => {
  await PostRepository.createPost({ title, content, authorId: userId })
}

export const getAllPosts = async (): Promise<Post[]> => {
  return await PostRepository.findAllPosts()
}
