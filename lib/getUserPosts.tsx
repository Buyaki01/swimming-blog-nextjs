export default async function getUserPosts(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } }) //explicitly telling the browser not to cache the response locally, ensuring that you always get a fresh response from the server, regardless of any previous requests

  if (!res.ok) throw new Error('failed to fetch user')

  return res.json()
}