import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"

export default function ArticlePage({ data }) {
  
  const article = data.markdownRemark;
  const image = data.file.publicURL;
  console.log(image);

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col>
            <h2>{article.frontmatter.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
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
          <Col className="article-image">
              <img 
                src={image}
                alt={article.frontmatter.title}
                width="100%"
              />
          </Col>
        </Row>
        <Row>
          <Col>
            <div dangerouslySetInnerHTML={{ __html: article.html }} />
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