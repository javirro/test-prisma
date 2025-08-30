
import { createUserAndLike } from './db/transactions/transactions'


async function main() {
// await createUserWithBio("javier@example.com", "Javier Doe", "This is my bio javier doe")
createUserAndLike(1, 4)
}

main()
