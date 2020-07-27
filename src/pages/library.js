import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleSearch from "../components/article_search"
import ArticleList from "../components/article_list"

export default function LibraryPage() {

	return (
	  <Layout pageInfo={{ pageName: "library" }}>
	    <SEO title="Our Library" />
	    <h2>Our Library</h2>
	    <ArticleSearch />
	    <ArticleList />
	    <hr />
	    <Link to="/">Go back to the homepage</Link>
	  </Layout>
	)

}
