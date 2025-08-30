import { Profile } from '../../generated/prisma'
import ProfileRepository from '../db/repositories/ProfileRepository'

export const createProfile = async (userId: number, bio?: string) => {
  await ProfileRepository.createProfile({ userId, bio })
}

export const getProfileById = async (userId: number): Promise<Profile | null> => {
  return await ProfileRepository.findProfileByUserId(userId)
}
