import { createPost } from './services/posts'
import { createProfile } from './services/profile'
import { createUser, getUserById, getUserWithPostsById } from './services/users'


//createUser("john.doe@example.com", "John Doe")

//createPost("New Post Title", "This is the content of the new post", 1)

//createProfile(1, "This is my bio")

async function main() {
  const user = await getUserById(1)
  console.log("Simple user:", user)
  const userWithPosts = await getUserWithPostsById(1)
  console.log("User with posts:", userWithPosts)
}

main()
