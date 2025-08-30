import { Likes } from '../../generated/prisma';
import LikesRepository from '../db/repositories/LikesRepository'

export const likePost = async ({ userId, postId }: { userId: number; postId: number }) => {
  await LikesRepository.likePost(userId, postId)
}

export const getLikesByUserId = async (userId: number) => {
  return await LikesRepository.findLikesByUserId(userId)
}

export const getLikesByPostId = async (postId: number)=> {
  return await LikesRepository.findLikesByPostId(postId)
}