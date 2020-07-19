// index.js

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import imgReader from "../images/reading_man.png"

export default function HomePage() {

  const landingInvitation = `
      <p>
        When we read, not only are we improving memory and empathy, but research has shown that it makes us feel better and more positive too. 
      </p>
      <p>
        Plan your visit to our library and explore the range of learning spaces to find your perfect study environment.
      </p>
    `;

  const landingText = 'View our Library';
  const landingLink = '/library';

  return (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`articles`]} />
    <Landing invitation={landingInvitation} linkText={landingText} linkHref={landingLink} image={imgReader} />
  </Layout>
  )
}
