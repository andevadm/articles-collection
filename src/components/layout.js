// layout.js

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"

import layoutBackground from "../images/layout_background.jpg"


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

  console.log(layoutBackground);

  return (
      
      <Container fluid className="layout-container px-0" style={{ background: `no-repeat center/cover url(${layoutBackground})` }} >

        <Container fluid="lg" className="content-container px-0">

          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row>

          <Navbar pageInfo={pageInfo} />

          <Row noGutters>
            <Col>
              <Container className="children-container m-4">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
          
        </Container>

        <Container fluid="lg" className="px-0">
          <Row noGutters>
              <Col className="footer-col">
                <Footer />
              </Col>
          </Row>
        </Container>

      </Container>
  )
}
