import React from "react"
import { Form, Col } from "react-bootstrap"

export default function ArticleSearch({ selectOrder, searchArticle }) {

	// Initialize values for event listeners
	console.log('--2-- ArticleForm is loaded -----');
	const initValue = {
		order: 'date',
		search: ''
	};
	searchArticle(initValue.search);
	selectOrder(initValue.order);

	return (
	  	<Form className="article-form" onSubmit={ (event) => event.preventDefault() }>
		  <Form.Row>
		  	<Col className="article-form-order mx-auto" sm={3} >
			    <Form.Label htmlFor="order">Order by:</Form.Label>
			    <Form.Control as="select" id="order" defaultValue={initValue.order} custom 
			    onChange={ (event) => selectOrder(event.target.value) }>
			      <option value="title">Title</option>
			      <option value="author">Author</option>
			      <option value="date">Date</option>
			    </Form.Control>
		    </Col>
		    <Col className="article-form-search mx-auto" sm={7}>
		    	<Form.Label htmlFor="search">Search article by title:</Form.Label>
		    	<Form.Control id="search" placeholder="Enter keywords..."
		    	onChange={ (event) => searchArticle(event.target.value) } />
		    </Col>
		  </Form.Row>
		</Form>
	)

}

