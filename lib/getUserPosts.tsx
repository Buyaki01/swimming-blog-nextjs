export default async function getUserPosts(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { cache: 'force-cache' })

  if (!res.ok) throw new Error('failed to fetch user')

  return res.json()
}