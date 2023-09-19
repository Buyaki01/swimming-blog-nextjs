import { getSortedPostsData } from "@/lib/posts"
import { notFound } from "next/navigation"

export default async function Post({ params }: { params: { postId: string }}) {
  const posts = getSortedPostsData() //deduped 
  const { postId } = params

  if (!posts.find(post => post.id === postId)) {
    return notFound()
  }

  return (
    <div></div>
  )
}