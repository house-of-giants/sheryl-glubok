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
		`gatsby-plugin-netlify-cms`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `cms`,
				path: `${__dirname}/src`,
			},
		},
		`gatsby-transformer-remark`,
	],
}
