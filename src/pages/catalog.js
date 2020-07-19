import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function CatalogPage() {

	return (
	  <Layout pageInfo={{ pageName: "catalog" }}>
	    <SEO title="Articles Catalog" />
	    <h1>Articles Catalog</h1>
	    <p>Here will be a list of the articles</p>
	    <Link to="/">Go back to the homepage</Link>
	  </Layout>
	)

}
