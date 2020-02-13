/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				displayName: true,
				pure: true,
			},
		},
		{
			resolve: `gatsby-source-prismic`,
			options: {
				repositoryName: 'sherylglubok',
				accessToken: `${process.env.GATSBY_PRISMIC_API_KEY}`,
				path: '/preview',
				previews: true,
				linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
			}
		},
		`gatsby-plugin-glslify`,
	],
}
