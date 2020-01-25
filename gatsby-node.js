const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const pages = await graphql(`
		{
			allPrismicBlogPost {
				edges {
					node {
						id
						uid
					}
				}
			}
		}
	`)
	const template = path.resolve("src/templates/post.js")
	pages.data.allPrismicBlogPost.edges.forEach(edge => {
		createPage({
			path: `/post/${edge.node.uid}`,
			component: template,
			context: {
				uid: edge.node.uid,
			},
		})
	})
}