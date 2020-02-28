const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if ( node.internal.type === `MarkdownRemark` ) {
		const slug = createFilePath({ node, getNode })
		createNodeField({
			node,
			name: "slug",
			value: slug,
		})
		createNodeField({
			node,
			name: "layout",
			value: node.frontmatter.layout,
		})
	}
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              layout
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		const template = path.resolve(`src/templates/${node.fields.layout}.js`)

		createPage({
			path: node.fields.slug,
			component: template,
			context: {
				slug: node.fields.slug
			},
		})
	})
}