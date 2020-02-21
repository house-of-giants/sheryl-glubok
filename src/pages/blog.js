import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../theme/layout'
import PostItem from '../components/Blog/PostItem'

import { StyledContainer } from '../styles/global/layout'

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <StyledContainer>
        { posts
          .map(({ node: post }) => 
            <PostItem key={post.id} post={post} />
          )
        }
      </StyledContainer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogListingQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            thumbnail
          }
        }
      }
    }
  }
`