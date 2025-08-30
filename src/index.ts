import LikesRepository from './db/repositories/LikesRepository'
import { likePost } from './services/likes'
import { createPost } from './services/posts'
import { createProfile } from './services/profile'
import {
  createUser,
  getUserById,
  getUserWithBioById,
  getUserWithLikesById,
  getUserWithPostsById,
  getUserWithProfileById,
} from './services/users'
import { generateRandomPost } from './utils/generateRandomPost'
import { generateRandomUsers } from './utils/generateRandomUsers'

//createUser("john.doe@example.com", "John Doe")

//createPost("New Post Title", "This is the content of the new post", 1)

//createProfile(1, "This is my bio")

async function main() {
  //   await likePost({ userId: 1, postId: 5 })
  //   await likePost({ userId: 1, postId: 2 })
  //   await likePost({ userId: 1, postId: 3 })
  //   await likePost({ userId: 2, postId: 1 })
  //   await likePost({ userId: 2, postId: 2 })
  //   await likePost({ userId: 2, postId: 3 })
  const userLikes = await getUserWithLikesById(1)
  console.log(userLikes)
  const userPosts = await getUserWithPostsById(1)
  console.log(userPosts)
}

main()
