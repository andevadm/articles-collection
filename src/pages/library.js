import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlesList from "../components/articles_list"

export default function LibraryPage() {

	return (
	  <Layout pageInfo={{ pageName: "library" }}>
	    <SEO title="Our Library" />
	    <h1>Our Library</h1>
	    <p>Select any article from the list.</p>
	    <ArticlesList />
	    <hr />
	    <Link to="/">Go back to the homepage</Link>
	  </Layout>
	)

}
