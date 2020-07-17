// layout.js

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navbar"

export default function Layout({ children, pageInfo }) {
  
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
      <>

        <Container fluid className="px-0 main">

          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row>

          <Navbar pageInfo={pageInfo} />

          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
          
        </Container>

        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  © {new Date().getFullYear()}
                </span>
              </footer>
            </Col>
          </Row>
        </Container>

      </>
  )
}
