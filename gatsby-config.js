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
		description: 'Sheryl Glubok is a Writer, Director and Storyteller.',
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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `cms`,
				path: `${__dirname}/src`,
			},
		},
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: "gatsby-transformer-remark",
			options: {
					plugins: [
						"gatsby-remark-unwrap-images",
						{
							resolve: "gatsby-remark-external-links",
							options: {
								target: "_blank",
								rel: "noopener noreferrer"
							}
						}
					],
			},
		},
		{
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/components/CMS/index.js`,
      },
    },
	],
}
