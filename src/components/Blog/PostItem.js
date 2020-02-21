import React from 'react'
import { Link } from 'gatsby'

const PostItem = ({ post }) => (
  <div>
    <Link to={post.fields.slug}>
    	<img src={post.frontmatter.thumbnail} alt="" />
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)
export default PostItem