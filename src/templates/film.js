import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../theme/layout'
import { StyledContainer } from '../styles/global/layout'

export default function Film({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
			<StyledContainer>
				<h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        {post.frontmatter.vimeo_url ?
          <iframe title={`Vimeo embed for ${post.frontmatter.title}`} src={`https://player.vimeo.com/video/${post.frontmatter.vimeo_url}`} width="640" height="487" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> : ''
        }
        <img src={post.frontmatter.thumbnail} alt="" />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
			</StyledContainer>
		</Layout>
  )
}

export const pageQuery = graphql`
  query FilmPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail
        vimeo_url
      }
    }
  }
`
