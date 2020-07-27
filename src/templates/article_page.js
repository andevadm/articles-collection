import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function ArticlePage({ data }) {
  
  const article = data.markdownRemark;
  const image = data.file.publicURL;
  console.log(image);

  return (
    <Layout>
      <SEO title={article.frontmatter.title} />
      <Container fluid>
        <Row>
          <Col>
            <h2>{article.frontmatter.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col md className="article-metadata">
            <div className="article-author">
              <strong>Author:</strong> {article.frontmatter.author}
            </div>
            <div className="article-date">
              <strong>Published:</strong> {article.frontmatter.date}
            </div>
            <div className="article-abstract">
              <p><strong>Abstract</strong></p>
              <p>{article.frontmatter.description}</p>
            </div>
            <div className="article-keywords">
              <strong>Keywords:</strong> {article.frontmatter.keywords.join(' , ')}
            </div>
          </Col>
          <Col md className="article-image">
              <Image 
                src={image}
                alt={article.frontmatter.title}
                fluid
                rounded
               />
          </Col>
        </Row>
        <Row>
          <Col className="article-text">
            <div dangerouslySetInnerHTML={{ __html: article.html }} />
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <Link to="/library">Go back to the library</Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )

}

export const query = graphql`
  query($slug: String!, $name: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        keywords
        author
        date
      }
    }
    file(ext: { in: [".jpg", ".png", ".svg"] }, name: { eq: $name }) {
          publicURL
        }
  }
`