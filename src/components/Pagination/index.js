import React from 'react'
import { Link } from 'gatsby'

import StyledPagination from './StyledPagination'

const Pagination = ({ currentPage, numPages }) => {
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString()
	const nextPage = "/blog/" + (currentPage + 1).toString()

	return(
		<StyledPagination role="navigation" aria-label="Pagination Navigation">
			<ul>
				{!isLast && (
					<li>
						<Link to={nextPage} rel="next">
							&larr; Older Posts
						</Link>
					</li>
				)}
				{!isFirst && (
					<li>
						<Link to={prevPage} rel="prev">
							Newer Posts &rarr;
						</Link>
					</li>
				)}
			</ul>
		</StyledPagination>
	)
}

export default Pagination