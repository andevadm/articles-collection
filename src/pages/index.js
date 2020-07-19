// index.js

import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function HomePage() {

  return (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`articles`]} />

    <Container className="text-center m-3 p=3">
      <Row>
        <Col>
          <p>
            Here will be a landing page to open articles catalog.
          </p>
        </Col>
      </Row>
    </Container>

  </Layout>
  )
}
