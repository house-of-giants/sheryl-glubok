import React from "react"
import { graphql } from "gatsby"

import Layout from '../theme/layout'
import { StyledContainer } from '../styles/global/layout'

export default function Post({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <Layout>
			<StyledContainer>
				<h1>{post.frontmatter.title}</h1>
				<h2>{post.frontmatter.date}</h2>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</StyledContainer>
		</Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
