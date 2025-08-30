import { createPost } from './services/posts'
import { createProfile } from './services/profile'
import { createUser, getUserById, getUserWithBioById, getUserWithPostsById, getUserWithProfileById } from './services/users'


//createUser("john.doe@example.com", "John Doe")

//createPost("New Post Title", "This is the content of the new post", 1)

//createProfile(1, "This is my bio")

async function main() {

  const userWithBio = await getUserWithBioById(1)
  console.log("User with bio:", userWithBio)
}

main()
