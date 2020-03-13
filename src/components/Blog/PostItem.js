import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import StyledPostItem from './StyledPostItem'

const PostItem = ({ post, variants, i }) => {
	const { date, thumbnail, title } = post.frontmatter
	const { slug } = post.fields
	const postDate = new Date( Date.parse( date ) )
	const formattedDate = postDate.toISOString()
	const thumb = thumbnail ? thumbnail : 'https://source.unsplash.com/user/claudiotesta/350x368'

	return(
		<StyledPostItem variants={variants} i={i} itemScope itemType="https://schema.org/BlogPosting">
			<Link to={slug}>
				<div className="image" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
					<img src={thumb} alt="" />
					<meta itemProp="url" content={thumb} />
					<meta itemProp="width" content="100" />
					<meta itemProp="height" content="100" />
				</div>
				<header>
					<h2 className="h4 title" itemProp="headline mainEntityOfPage" >{title}</h2>
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
						<time dateTime={formattedDate}>{date}</time>
					</p>
					<meta itemProp="dateModified" content={formattedDate} />
				</header>
			</Link>
		</StyledPostItem>
	)
}

PostItem.propTypes ={
	post: PropTypes.shape({
		id: PropTypes.string.isRequired,
		fields: PropTypes.object.isRequired,
		frontmatter: PropTypes.object.isRequired,
	}),
	variants: PropTypes.object,
	i: PropTypes.number,
}

export default PostItem