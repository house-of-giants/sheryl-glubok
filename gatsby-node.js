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

	// Get all Blog Posts
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

	// Create Blog Listing Pages
	const posts = blogResults.data.allMarkdownRemark.edges
	const postsPerPage = 8
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

	// Get Film Markdown Pages
	const filmResults = await graphql(`
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

	if (filmResults.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	// Create Film Listing Pages
	const films = filmResults.data.allMarkdownRemark.edges
	const filmsPerPage = 8
	const numFilmPages = Math.ceil(films.length / filmsPerPage)
	Array.from({ length: numFilmPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/films` : `/films/${i + 1}`,
			component: path.resolve("src/templates/film-listing.js"),
			context: {
				limit: filmsPerPage,
				skip: i * filmsPerPage,
				numPages: numFilmPages,
				currentPage: i + 1,
			},
		})
	})

	// Create Film and Blog Detail pages
	const allPosts = posts.concat(films)
	allPosts.forEach(({ node }) => {
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

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	const typeDefs = `
		type MarkdownRemark implements Node {
			frontmatter: Frontmatter
		}
		type Frontmatter {
			title: String!
			date: Date!
			release_date: String!
			thumbnail: String
			vimeo_url: String
			in_production: Boolean
			runtime: Int
			written_by: [String]
			directed_by: [String]
			produced_by: [String]
			starring: [String]
			poster: String
			awards: [Awards]
			team: [Team]
		}
		type Awards {
			logo: String
			logo_link: String
		}
		type Team {
			member_name: String
			member_title: String
			member_excerpt: String
			member_headshot: String
		}
	`
	createTypes(typeDefs)
}