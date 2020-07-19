import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function LibraryPage() {

	return (
	  <Layout pageInfo={{ pageName: "library" }}>
	    <SEO title="Our Library" />
	    <h1>Our Library</h1>
	    <p>Here will be a list of the articles</p>
	    <Link to="/">Go back to the homepage</Link>
	  </Layout>
	)

}
