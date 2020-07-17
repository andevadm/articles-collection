import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function NotFoundPage() {
	return (
	  <Layout>
	    <SEO title="404: Not found" />
	    <h1>Page not found</h1>
	    <p>The route doesn&#39;t exist.</p>
	  </Layout>
	)
}
