import prisma from '../prismaClient'

export default class UserRepository {
  static async findAllUsers() {
    return await prisma.user.findMany()
  }

  static async findAllUserAvailableIds() {
    return await prisma.user.findMany({
      select: { id: true },
    })
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

  static async findUserWithBioById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      include: { profile: { select: { bio: true } } },
    })
  }

  static async findUsersLikesById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      include: { likes: true },
    })
  }

  static async createUser(data: { email: string; name?: string }) {
    return await prisma.user.create({
      data,
    })
  }

  // This query internally does a transaction like this:
  /**
   * BEGIN
   * INSERT INTO "public"."User" ("email","name") VALUES ($1,$2) RETURNING "public"."User"."id"
   * INSERT INTO "public"."Profile" ("bio","userId") VALUES ($1,$2) RETURNING "public"."Profile"."id"
   * SELECT "public"."User"."id", "public"."User"."email", "public"."User"."name" FROM "public"."User" WHERE "public"."User"."id" = $1 LIMIT $2 OFFSET $3
   * COMMIT
   */
  static async createUserWithBio(data: { email: string; name?: string; bio: string }) {
    return await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        profile: {
          create: {
            bio: data.bio,
          },
        },
      },
    })
  }
}
