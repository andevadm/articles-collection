import React from "react"
import { Container } from "react-bootstrap"

import ArticleCard from "./article_card"

export default function ArticleList({ articlesList }) { 

  console.log('--3-- ArticleList is loaded -----');
  console.log('Input list:');
  console.log(articlesList);

  const renderList = articlesList.map((item) =>  {
    return <li className="m-2" key={item.link}>
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
      <ul className="article-list d-flex align-items-stretch justify-content-around flex-wrap">
        {renderList}
      </ul>
    </Container>
  )

}