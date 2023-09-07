import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"

type Params = {
  params: {
    userId: string
  }
}

export default async function UserPage({ params: { userId } }: Params) {// This component takes an object as a parameter, and it expects this object to have a params property that contains a userId property
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)
  
  // const [user, userPosts] = await Promise.all([userData, userPostsData])

  const user = await userData

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  )
}