import UserRepository from "../db/repositories/UserRepository"

export const createUser = async (email: string, name: string) => {
    await UserRepository.createUser({ email, name })
}

export const getUserById = async (id: number) => {
    return await UserRepository.findUserById(id)
}

export const getUserWithPostsById = async (id: number) => {
    return await UserRepository.findUserWithPostsById(id)
}
