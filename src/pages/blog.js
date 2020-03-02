import React from 'react'
import { graphql } from 'gatsby'

import { animPageDefault } from '../utils/animationDefs'

import Layout from '../theme/layout'
import PostItem from '../components/Blog/PostItem'
import NavLogo from '../components/Nav/NavLogo'

import { StyledBlogContainer } from '../styles/global/layout'
import { motion } from 'framer-motion'

const animList = {
	visible: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	hidden: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
}

const animItem = {
	visible: {
		opacity: 1,
		transition: {
			x: { stiffness: 1000, velocity: -100 }
		}
	},
	hidden: {
		opacity: 0,
		transition: {
			x: { stiffness: 1000 }
		}
	}
}

export default function Blog({ data }) {
	const { edges: posts } = data.allMarkdownRemark

	return (
		<Layout>
			<NavLogo />
			<StyledBlogContainer itemScope itemType="https://schema.org/Blog" variants={animPageDefault} initial="in" animate="normal" exit="out">>
				<div className="blog-heading">
					<h1 className="screen-reader-text">Blog, Community, News</h1>
					<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442 292"><path d="M15.992 35.352V22.824h3.744c1.248 0 2.352.528 3.312 1.584s1.44 2.592 1.44 4.608c0 2.16-.48 3.768-1.44 4.824-.96 1.008-2.064 1.512-3.312 1.512h-3.744zm0-21.6V3.24h3.24c1.392 0 2.448.528 3.168 1.584.72 1.056 1.08 2.304 1.08 3.744 0 1.392-.36 2.616-1.08 3.672-.72 1.008-1.776 1.512-3.168 1.512h-3.24zM2.6-6.408V45h20.232c2.784 0 5.16-.36 7.128-1.08 1.968-.768 3.552-1.824 4.752-3.168 1.248-1.344 2.16-2.952 2.736-4.824.576-1.872.864-3.912.864-6.12 0-1.344-.192-2.664-.576-3.96-.336-1.344-.888-2.568-1.656-3.672-.768-1.104-1.752-2.016-2.952-2.736-1.2-.768-2.64-1.224-4.32-1.368v-.144c1.44-.288 2.664-.792 3.672-1.512s1.824-1.584 2.448-2.592c.672-1.056 1.152-2.208 1.44-3.456.336-1.296.504-2.616.504-3.96 0-3.888-1.152-6.984003-3.456-9.288-2.256-2.352-5.784-3.528-10.584-3.528H2.6zm50.6318 0V45h12.96V-6.408h-12.96zM93.4663 25.56c0-2.448.048-4.464.144-6.048.096-1.584.288-2.832.576-3.744.288-.912.648-1.536 1.08-1.872.48-.336 1.08-.504 1.8-.504s1.32.168 1.8.504c.48.336.84.96 1.08 1.872.2877.912.4797 2.16.5757 3.744.096 1.584.144 3.6.144 6.048s-.048 4.464-.144 6.048c-.096 1.536-.288 2.76-.5757 3.672-.24.912-.6 1.536-1.08 1.872-.48.336-1.08.504-1.8.504s-1.32-.168-1.8-.504c-.432-.336-.792-.96-1.08-1.872-.288-.912-.48-2.136-.576-3.672-.096-1.584-.144-3.6-.144-6.048zm20.1597 0c0-2.832-.168-5.472-.504-7.92-.288-2.496-.984-4.68-2.088-6.552-1.104-1.872-2.76-3.336-4.968-4.392-2.208-1.104-5.208-1.656-8.9997-1.656-3.648 0-6.576.6-8.784 1.8-2.16 1.152-3.816 2.688-4.968 4.608-1.152 1.92-1.92 4.104-2.304 6.552-.336 2.448-.504 4.944-.504 7.488 0 2.832.144 5.496.432 7.992.336 2.448 1.056 4.608 2.16 6.48 1.104 1.824 2.76 3.264 4.968 4.32 2.208 1.008 5.208 1.512 9 1.512 3.6477 0 6.5517-.552 8.7117-1.656 2.208-1.152 3.888-2.664 5.04-4.536 1.152-1.92 1.896-4.104 2.232-6.552.384-2.448.576-4.944.576-7.488zm34.056-19.512v5.4h-.144c-.72-2.352-1.872-4.008-3.456-4.968-1.584-.96-3.288-1.44-5.112-1.44-1.872 0-3.552.336-5.04 1.008-1.488.624-2.76 1.704-3.816 3.24-1.008 1.488-1.8 3.504-2.376 6.048-.528 2.496-.792 5.616-.792 9.36 0 4.032.336 7.32 1.008 9.864.72 2.496 1.632 4.44 2.736 5.832 1.104 1.392 2.328 2.328 3.672 2.808 1.344.48 2.664.72 3.96.72 1.776 0 3.48-.408 5.112-1.224 1.632-.816 2.856-2.352 3.672-4.608h.144v7.2c0 1.104-.12 1.968-.36 2.592-.24.624-.552 1.104-.936 1.44-.336.336-.744.552-1.224.648-.48.096-.96.144-1.44.144-1.008 0-1.8-.264-2.376-.792-.576-.528-.864-1.272-.864-2.232h-11.664c.048 2.208.456 4.008 1.224 5.4.816 1.44 1.896 2.568 3.24 3.384 1.392.816 3 1.368 4.824 1.656 1.824.336 3.768.504 5.832.504 2.304 0 4.44-.24 6.408-.72 1.968-.432 3.672-1.176 5.112-2.232 1.488-1.056 2.64-2.472 3.456-4.248.864-1.776 1.296-3.936 1.296-6.48V6.048h-12.096zm-7.776 18.432c0-2.016.072-3.648.216-4.896.192-1.296.432-2.304.72-3.024.336-.72.72-1.2 1.152-1.44.48-.288 1.032-.432 1.656-.432.576 0 1.08.144 1.512.432.48.24.864.72 1.152 1.44.336.72.576 1.728.72 3.024.144 1.248.216 2.88.216 4.896 0 2.064-.072 3.744-.216 5.04-.144 1.248-.384 2.232-.72 2.952-.288.72-.672 1.2-1.152 1.44-.432.24-.936.36-1.512.36-.624 0-1.176-.12-1.656-.36-.432-.24-.816-.72-1.152-1.44-.288-.72-.528-1.704-.72-2.952-.144-1.296-.216-2.976-.216-5.04zM22.688 83.216v2.88h12.96v-3.24c0-2.496-.312-4.728-.936-6.696-.576-2.016-1.536-3.72-2.88-5.112-1.296-1.44-3-2.544-5.112-3.312-2.112-.768-4.68-1.152-7.704-1.152-3.456 0-6.36.48-8.712 1.44-2.352.912-4.248 2.424-5.688 4.536-1.44 2.112-2.472 4.872-3.096 8.28C.944 84.248.656 88.4.656 93.296c0 4.8.24 8.904.72 12.312.528 3.36 1.464 6.12 2.808 8.28C5.528 116 7.4 117.512 9.8 118.424c2.4.912 5.472 1.368 9.216 1.368 2.16 0 4.248-.24 6.264-.72 2.064-.432 3.888-1.296 5.472-2.592 1.584-1.344 2.856-3.168 3.816-5.472.96-2.304 1.44-5.256 1.44-8.856v-3.816h-12.96c0 2.448-.072 4.488-.216 6.12-.096 1.584-.288 2.856-.576 3.816s-.696 1.656-1.224 2.088c-.528.384-1.2.576-2.016.576-1.008 0-1.824-.264-2.448-.792-.576-.528-1.032-1.464-1.368-2.808-.288-1.344-.48-3.144-.576-5.4-.096-2.304-.144-5.184-.144-8.64 0-3.456.048-6.312.144-8.568.096-2.304.288-4.128.576-5.472.336-1.344.792-2.28 1.368-2.808.624-.528 1.44-.792 2.448-.792 1.296 0 2.232.528 2.808 1.584.576 1.056.864 3.048.864 5.976zM62.1519 99.56c0-2.448.048-4.464.144-6.048.096-1.584.288-2.832.576-3.744.288-.912.648-1.536 1.08-1.872.48-.336 1.08-.504 1.8-.504s1.32.168 1.8.504c.48.336.84.96 1.08 1.872.288.912.48 2.16.576 3.744.096 1.584.144 3.6.144 6.048s-.048 4.464-.144 6.048c-.096 1.536-.288 2.76-.576 3.672-.24.912-.6 1.536-1.08 1.872-.48.336-1.08.504-1.8.504s-1.32-.168-1.8-.504c-.432-.336-.792-.96-1.08-1.872-.288-.912-.48-2.136-.576-3.672-.096-1.584-.144-3.6-.144-6.048zm20.16 0c0-2.832-.168-5.472-.504-7.92-.288-2.496-.984-4.68-2.088-6.552-1.104-1.872-2.76-3.336-4.968-4.392-2.208-1.104-5.208-1.656-9-1.656-3.648 0-6.576.6-8.784 1.8-2.16 1.152-3.816 2.688-4.968 4.608-1.152 1.92-1.92 4.104-2.304 6.552-.336 2.448-.504 4.944-.504 7.488 0 2.832.144 5.496.432 7.992.336 2.448 1.056 4.608 2.16 6.48 1.104 1.824 2.76 3.264 4.968 4.32 2.208 1.008 5.208 1.512 9 1.512 3.648 0 6.552-.552 8.712-1.656 2.208-1.152 3.888-2.664 5.04-4.536 1.152-1.92 1.896-4.104 2.232-6.552.384-2.448.576-4.944.576-7.488zm33.0481-6.264V119h12.96V93.296c0-1.632.24-2.808.72-3.528.48-.72 1.296-1.08 2.448-1.08s1.968.36 2.448 1.08c.48.72.72 1.896.72 3.528V119h12.96V89.624c0-2.112-.264-3.84-.792-5.184-.528-1.344-1.248-2.424-2.16-3.24-.912-.816-1.992-1.368-3.24-1.656-1.2-.336-2.52-.504-3.96-.504-2.016 0-3.912.456-5.688 1.368-1.728.864-3.096 2.4-4.104 4.608-.816-2.016-1.944-3.504-3.384-4.464-1.392-1.008-3.432-1.512-6.12-1.512-4.608 0-7.752 1.92-9.432 5.76h-.144v-4.752H96.0639V119h12.9601V93.296c0-1.632.24-2.808.72-3.528.48-.72 1.296-1.08 2.448-1.08s1.968.36 2.448 1.08c.48.72.72 1.896.72 3.528zm66.119 0V119h12.96V93.296c0-1.632.24-2.808.72-3.528.48-.72 1.296-1.08 2.448-1.08s1.968.36 2.448 1.08c.48.72.72 1.896.72 3.528V119h12.96V89.624c0-2.112-.264-3.84-.792-5.184-.528-1.344-1.248-2.424-2.16-3.24-.912-.816-1.992-1.368-3.24-1.656-1.2-.336-2.52-.504-3.96-.504-2.016 0-3.912.456-5.688 1.368-1.728.864-3.096 2.4-4.104 4.608-.816-2.016-1.944-3.504-3.384-4.464-1.392-1.008-3.432-1.512-6.12-1.512-4.608 0-7.752 1.92-9.432 5.76h-.144v-4.752h-12.528V119h12.96V93.296c0-1.632.24-2.808.72-3.528.48-.72 1.296-1.08 2.448-1.08s1.968.36 2.448 1.08c.48.72.72 1.896.72 3.528zm47.183-13.248v29.376c0 2.064.264 3.792.792 5.184.528 1.344 1.248 2.424 2.16 3.24.912.768 1.968 1.272 3.168 1.512 1.248.288 2.592.432 4.032.432 4.656 0 7.8-1.848 9.432-5.544h.144V119h12.528V80.048h-12.96v25.704c0 1.632-.24 2.808-.72 3.528-.48.72-1.296 1.08-2.448 1.08s-1.968-.36-2.448-1.08c-.48-.72-.72-1.896-.72-3.528V80.048h-12.96zm47.486 0V119h12.96V93.296c0-1.632.24-2.808.72-3.528.48-.72 1.296-1.08 2.448-1.08s1.968.36 2.448 1.08c.48.72.72 1.896.72 3.528V119h12.96V89.624c0-2.112-.264-3.84-.792-5.184-.528-1.344-1.248-2.424-2.16-3.24-.912-.816-1.992-1.368-3.24-1.656-1.2-.336-2.52-.504-3.96-.504-4.608 0-7.752 1.92-9.432 5.76h-.144v-4.752h-12.528zm47.703-12.456v9.648h12.96v-9.648h-12.96zm0 12.456V119h12.96V80.048h-12.96zm25.978 0v8.712h4.32v20.736c0 2.16.192 3.912.576 5.256.432 1.296 1.08 2.28 1.944 2.952.912.672 2.064 1.104 3.456 1.296 1.392.144 3.072.216 5.04.216 1.104 0 2.256-.048 3.456-.144 1.2-.048 2.4-.072 3.6-.072v-8.64h-2.016c-1.056 0-1.848-.216-2.376-.648-.48-.48-.72-1.272-.72-2.376V88.76h5.112v-8.712h-5.112V68.6h-12.96v11.448h-4.32zm36.247 42.048v9.072c1.104.096 2.232.168 3.384.216 1.2.048 2.496.072 3.888.072 1.728 0 3.264-.168 4.608-.504 1.344-.336 2.52-.936 3.528-1.8 1.056-.864 1.944-2.04 2.664-3.528.768-1.44 1.44-3.288 2.016-5.544l10.44-40.032h-12.96l-3.744 26.28h-.144l-3.96-26.28h-13.32l10.224 36.72c.144.528.264 1.032.36 1.512.144.48.216.864.216 1.152 0 .192-.072.456-.216.792-.144.336-.384.648-.72.936-.336.336-.792.624-1.368.864-.528.24-1.2.36-2.016.36-.48 0-.96-.024-1.44-.072-.48-.048-.96-.12-1.44-.216z" fill="#fff"/><path fill="#fff" d="M21 98h421v13H21z"/><path d="M2.092 291.332H53.5v-12.528H21.748v-.144l31.752-8.928v-14.688H2.092v12.528h31.68v.144l-31.68 8.64v14.976zm25.344-71.049h1.728v7.128h-1.728c-2.064 0-3.576-.24-4.536-.72-.96-.528-1.44-1.464-1.44-2.808 0-1.392.48-2.328 1.44-2.808.96-.528 2.472-.792 4.536-.792zm8.784 7.128v-19.224h-3.96c-3.552 0-6.504.336-8.856 1.008-2.4.624-4.32 1.608-5.76 2.952-1.488 1.296-2.544 2.928-3.168 4.896-.624 1.92-.936 4.176-.936 6.768 0 2.928.384 5.448 1.152 7.56.72 2.064 1.896 3.768 3.528 5.112 1.632 1.344 3.744 2.328 6.336 2.952 2.592.624 5.76.936 9.504.936 3.696 0 6.84-.264 9.432-.792 2.592-.576 4.704-1.512 6.336-2.808 1.584-1.296 2.736-3 3.456-5.112.672-2.112 1.008-4.728 1.008-7.848 0-5.376-1.2-9.24-3.6-11.592-2.448-2.352-6.072-3.576-10.872-3.672v11.664c2.64 0 4.44.336 5.4 1.008.912.624 1.368 1.512 1.368 2.664 0 .912-.336 1.728-1.008 2.448-.72.72-2.136 1.08-4.248 1.08H36.22zm-21.672-30.344l38.952-7.92v-14.688l-27.576-3.96v-.144l27.576-3.96v-14.688l-38.952-7.92v12.528l28.008 3.24v.144l-28.008 3.816v13.824l28.008 3.816v.144l-28.008 3.24v12.528zm26.856-75.977v11.376c4.272 0 7.488-1.176 9.648-3.528 2.16-2.4 3.24-6.312 3.24-11.736 0-2.448-.288-4.632-.864-6.552-.576-1.968-1.44-3.6-2.592-4.896-1.152-1.344-2.52-2.376-4.104-3.096-1.584-.72-3.336-1.08-5.256-1.08-2.496 0-4.488.48-5.976 1.44-1.536.912-2.736 2.064-3.6 3.456-.912 1.392-1.608 2.904-2.088 4.536-.48 1.584-.936 3.072-1.368 4.464-.432 1.392-.912 2.568-1.44 3.528-.576.912-1.416 1.368-2.52 1.368-.96 0-1.704-.312-2.232-.936-.528-.624-.792-1.416-.792-2.376 0-1.104.312-1.944.936-2.52.576-.624 1.704-.936 3.384-.936V102.37c-8.16 0-12.24 4.872-12.24 14.616 0 2.64.312 4.944.936 6.912.624 1.92 1.488 3.528 2.592 4.824 1.104 1.248 2.4 2.184 3.888 2.808 1.44.624 3.024.936 4.752.936 2.448 0 4.44-.456 5.976-1.368 1.488-.96 2.688-2.136 3.6-3.528.912-1.392 1.632-2.88 2.16-4.464.528-1.632 1.032-3.144 1.512-4.536.48-1.392 1.032-2.544 1.656-3.456.624-.96 1.512-1.44 2.664-1.44 1.056 0 1.872.384 2.448 1.152.576.72.864 1.584.864 2.592 0 1.2-.456 2.112-1.368 2.736-.432.336-.984.576-1.656.72-.672.144-1.392.216-2.16.216z" /></svg>
				</div>
				<motion.div className="blog-wrap" variants={animList} initial="hidden" animate="visible" exit="hidden">
					{ posts
						.filter(edge => edge.node.fields.layout === 'blog')
						.map(({ node: post }, i) =>
							<PostItem key={post.id} post={post} variants={animItem} i={i} />
						)
					}
				</motion.div>
			</StyledBlogContainer>
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
						layout
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