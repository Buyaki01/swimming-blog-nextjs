import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"

import { notFound } from 'next/navigation'

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  if (!user.name) {
    return {
      title: "User Not Found"
    }
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}

export default async function UserPage({ params: { userId } }: Params) {// This component takes an object as a parameter, and it expects this object to have a params property that contains a userId property
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)
  
  // const [user, userPosts] = await Promise.all([userData, userPostsData])

  const user = await userData

  if (!user.name) return notFound()

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

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData

  return users.map(user => ({
    userId: user.id.toString()
  }))
}
