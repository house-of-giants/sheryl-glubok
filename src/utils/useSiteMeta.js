import { useStaticQuery, graphql } from 'gatsby';

const useSiteMeta = () => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						siteURL
					}
				}
			}
		`,
	);

	return site.siteMetadata;
};

export default useSiteMeta;