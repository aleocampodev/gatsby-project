import React from "react"
import Post from "../components/Post/Post"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default function Home({data}) {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6">
      <Post
        title="This is our first post"
        excerpt="We are writing something to be displayed in our excerpt "
      />
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark{
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
      }
    }
  }
`

