/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: 'Sheryl Glubok',
		description: 'Sheryl Glubok is a writer, direcotr and story teller.',
		author: 'Sheryl Glubok',
		siteURL: 'https://sherylglubok.com',
	},
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
		`gatsby-plugin-react-helmet`,
	],
}
