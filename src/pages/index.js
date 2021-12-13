import React from "react"
import Post from "../components/Post/Post"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default function Home({ data }) {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allMarkdownRemark.nodes.map(node => {
        return (
          <Post
            image={node.frontmatter.image}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            key={node.id}
          />
        )
      })}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        id
        excerpt
        html
      }
    }
  }
`
