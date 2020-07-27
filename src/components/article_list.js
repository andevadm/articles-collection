import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"

import ArticleCard from "./article_card"

export default function ArticleList() {

  const data = useStaticQuery(graphql`
      {
        allFile(filter: {ext: {in: [".jpg", ".png", ".svg"]}, name: {regex: "/article/"}}) {
          nodes {
            publicURL
            name
          }
        }
        allMarkdownRemark {
          nodes {
            frontmatter {
              author
              date
              title
              description
            }
            fields {
              slug
            }
          }
        }
      }
  `);

  const articlesData = data.allMarkdownRemark.nodes;
  const imagesData = data.allFile.nodes;

  let articlesList = [];
  for (let item of articlesData) {
    let listElement = {
        title: item.frontmatter.title,
        author: item.frontmatter.author,
        description: item.frontmatter.description,
        date: item.frontmatter.date,
        link: item.fields.slug
      };
    listElement.image = imagesData.find(image => item.fields.slug.includes(image.name)).publicURL;
    articlesList.push(listElement);
  }
  console.log(articlesList);

  const renderList = articlesList.map((item) =>  {
    return <li className="m-2">
        <ArticleCard 
          title={item.title} 
          author={item.author} 
          description={item.description}
          date={item.date}
          image={item.image}
          link={item.link}
        />
    </li>
  });

  return(
    <Container fluid>
      <ul className="article-list d-flex align-items-stretch justify-content-center flex-wrap">
        {renderList}
      </ul>
    </Container>
  )

}