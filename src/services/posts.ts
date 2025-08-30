import PostRepository from '../db/repositories/PostRepository'

export const createPost = async (title: string, content: string, userId: number) => {
  await PostRepository.createPost({ title, content, authorId: userId })
}

