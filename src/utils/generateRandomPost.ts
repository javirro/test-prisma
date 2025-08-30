import { getAvailableUserIds } from "../services/users"

export const generateRandomPost = async (amount: number) => {
    const availableUserIds = (await getAvailableUserIds()).map(u => u.id)
    const posts = []
    const availableCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const availableTitles = ['New Post Title', 'Another Post Title', 'More Posts Here']

    for (let i = 0; i < amount; i++) {
        const randomTitle = availableTitles[Math.floor(Math.random() * availableTitles.length)]
        const randomContent = Array.from({ length: 20 }, () =>
            availableCharacters.charAt(Math.floor(Math.random() * availableCharacters.length))
        ).join('')
        const randomUserId = availableUserIds[Math.floor(Math.random() * availableUserIds.length)]

        posts.push({ title: randomTitle, content: randomContent, userId: randomUserId })
    }

    return posts
}
