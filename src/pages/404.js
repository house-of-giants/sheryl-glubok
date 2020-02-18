import React from 'react'

import Layout from '../theme/layout'
import Hero from '../components/Hero'

export default() => (
	<Layout>
		<Hero logo={false} title="Page not found" content="You seem to have gotten lost – please try your search again." />
	</Layout>
)