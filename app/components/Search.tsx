'use client'

import { FormEvent, useState } from "react"
import ListItem from "./ListItem"

export default function Search() {
  const [search, setSearch] = useState('')

  //const posts = getSortedPostsData()
  // const filteredPosts = posts.filter((post) =>
  //  post.title.toLowerCase().includes(search.toLowerCase())
  //); 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {/* {filteredPosts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))} */}
      </div>
    </form>
  )
}