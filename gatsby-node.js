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
	const blogResults = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { layout: { eq: "blog" } } }
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

  if (blogResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = blogResults.data.allMarkdownRemark.edges
  const postsPerPage = 4
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("src/templates/blog-listing.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

	const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { layout: { eq: "film" } } }
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