import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"

export default function ArticlesList() {

   		return(
    	<Container fluid>
      		<Row>
        		<Col>
        			<Link to="/articles/article01" className="link-to-article" >Article 01</Link>
        		</Col>
        		<Col>
              <Link to="/articles/article02" className="link-to-article" >Article 02</Link>
            </Col>
            <Col>
              <Link to="/articles/article03" className="link-to-article" >Article 03</Link>
            </Col>
            <Col>
              <Link to="/articles/article04" className="link-to-article" >Article 04</Link>
            </Col>
      		</Row>
    	</Container>
    	)

}