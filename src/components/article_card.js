import React from "react"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"

export default function ArticleCard({ title, author, description, date, image, link}) {

	// <img src={image} alt={title} height="100" />

	return (
	  <Card className="article-card">
	  	<Card.Img variant="top" src={image} alt={title}  />
	  	<Card.Body>
		  	<Card.Title>
		  		<Link to={link} className="link-no-style">
		  			<h3>{title}</h3>
		  		</Link>
		  	</Card.Title>
		  	<Card.Subtitle className="article-card-author">
		  		by <em>{author}</em>
		  	</Card.Subtitle>
		  	<Card.Text className="article-card-description">
		  		{description}
		  	</Card.Text>
		</Card.Body>
		<Card.Footer className="article-card-date">
		  	Published: {date}
		</Card.Footer>
	  </Card>
	)

}