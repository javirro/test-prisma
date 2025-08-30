export const generateRandomUsers = (amount: number) => {
  const users = []
  const availableCharactersForEmails = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const endingEmail = '@example.com'

  for (let i = 0; i < amount; i++) {
    const randomName = Array.from({ length: 5 }, () =>
      availableCharactersForEmails.charAt(Math.floor(Math.random() * availableCharactersForEmails.length))
    ).join('')
    const randomEmail = randomName + endingEmail
    users.push({ email: randomEmail, name: randomName })
  }

  return users
}
