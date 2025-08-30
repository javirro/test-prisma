import prisma from '../prismaClient'

export default class ProfileRepository {
  static async findAllProfiles() {
    return await prisma.profile.findMany()
  }

  static async findProfileByUserId(userId: number) {
    return await prisma.profile.findUnique({
      where: { userId },
    })
  }

  static async createProfile(data: { userId: number; bio?: string }) {
    return await prisma.profile.create({
      data: {
        userId: data.userId,
        bio: data.bio,
      },
    })
  }

  static async updateProfile(userId: number, bio: string) {
    return await prisma.profile.update({
      where: { userId },
      data: { bio },
    })
  }
}
