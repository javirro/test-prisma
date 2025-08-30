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

export const getUserWithProfileById = async (id: number) => {
    return await UserRepository.findUserWithProfileById(id)
}

export const getUserWithBioById = async (id: number) => {
    return await UserRepository.findUserWithBioById(id)
}
