import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage() {

  return (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`articles`]} />

    <Container className="text-center m-3 p=3">
      <Row>
        <Col>
          <p>
            This is a Gatsby Starter that I frequently use to get jump started
            on quick website builds. It includes the following packages:
          </p>
        </Col>
      </Row>
    </Container>

  </Layout>
  )
}
