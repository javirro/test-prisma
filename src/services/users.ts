import { User } from '../../generated/prisma'
import UserRepository from '../db/repositories/UserRepository'

export const createUser = async (email: string, name: string) => {
  await UserRepository.createUser({ email, name })
}

export const createUserWithBio = async (email: string, name: string, bio: string) => {
  await UserRepository.createUserWithBio({ email, name, bio })
}

export const getUserById = async (id: number): Promise<User | null> => {
  return await UserRepository.findUserById(id)
}

export const getUserWithPostsById = async (id: number): Promise<User | null> => {
  return await UserRepository.findUserWithPostsById(id)
}

export const getUserWithProfileById = async (id: number): Promise<User | null> => {
  return await UserRepository.findUserWithProfileById(id)
}

export const getUserWithBioById = async (id: number): Promise<User | null> => {
  return await UserRepository.findUserWithBioById(id)
}

export const getUserWithLikesById = async (id: number): Promise<User | null> => {
  return await UserRepository.findUsersLikesById(id)
}

export const getAvailableUserIds = async () => {
  return await UserRepository.findAllUserAvailableIds()
}
