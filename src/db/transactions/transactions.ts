import prisma from '../prismaClient'

// This function creates a user and a like in a single transaction (atomically execution)
export const createUserAndLike = async (userId: number, postId: number) => {
  await prisma.$transaction([
    prisma.user.create({
      data: {
        email: 'javier22@example.com',
        name: 'Javier Doe22',
        profile: {
          create: {
            bio: 'This is my bio javier doe',
          },
        },
      },
    }),
    prisma.likes.create({
      data: {
        userId: userId,
        postId: postId,
      },
    }),
  ])
}
