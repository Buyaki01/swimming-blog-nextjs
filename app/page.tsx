import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  )
}
