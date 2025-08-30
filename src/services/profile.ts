import ProfileRepository from "../db/repositories/ProfileRepository"

export const createProfile = async (userId: number, bio?: string) => {
  await ProfileRepository.createProfile({ userId, bio })
}
