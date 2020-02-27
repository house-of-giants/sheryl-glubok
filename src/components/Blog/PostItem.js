import React from 'react'
import { Link } from 'gatsby'

import StyledPostItem from './StyledPostItem'

const PostItem = ({ post }) => {
	const postDate = new Date( Date.parse( post.frontmatter.date ) )
	const formattedDate = postDate.toISOString()

	return(
		<StyledPostItem itemScope itemType="https://schema.org/BlogPosting">
			<Link to={post.fields.slug}>
				<div className="image" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
					<img src={post.frontmatter.thumbnail} alt="" />
					<meta itemProp="url" content={post.frontmatter.thumbnail} />
					<meta itemProp="width" content="100" />
					<meta itemProp="height" content="100" />
				</div>
				<header>
					<h2 className="h4 title" itemProp="headline mainEntityOfPage" >{post.frontmatter.title}</h2>
					<meta itemProp="author" content="Sheryl Glubok" />
					<div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
						<div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
							<meta itemProp="url" content="/logo.png" />
							<meta itemProp="width" content="600" />
							<meta itemProp="height" content="60" />
						</div>
						<meta itemProp="name" content="Sheryl Glubok" />
					</div>
					<p className="date" itemProp="datePublished">
						<time dateTime={formattedDate}>{post.frontmatter.date}</time>
					</p>
					<meta itemProp="dateModified" content={formattedDate} />
				</header>
			</Link>
		</StyledPostItem>
	)
}
export default PostItem