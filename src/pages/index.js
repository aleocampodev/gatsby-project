import React from "react"
import Post from "../components/Post/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default function Home() {
  return (
    <PrimaryLayout column="col-xs-6">
      <Post
        title="This is our first post"
        excerpt="We are writing something to be displayed in our excerpt "
      />
      <Post
        title="This is our first post"
        excerpt="We are writing something to be displayed in our excerpt "
      />
      <Post
        title="This is our first post"
        excerpt="We are writing something to be displayed in our excerpt "
      />
      <Post
        title="This is our first post"
        excerpt="We are writing something to be displayed in our excerpt "
      />
      <Post
        title="This is our first post"
        excerpt="We are writing something to be displayed in our excerpt "
      />
    </PrimaryLayout>
  )
}
