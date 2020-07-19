import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"

export default function Landing({ invitation, linkText, linkHref, image }) {

   		return(
    	<Container fluid>
      		<Row>
        		<Col md={{ order: 'last' }}>
        			<div className="landing-image-container">
        				<img src={ image } alt="Reader" className="w-100 mb-4" />
        			</div>
        		</Col>
        		<Col md={{ order: 'first' }} className="text-center">
        			<div className="landing-invitation" dangerouslySetInnerHTML={{ __html: invitation }} />
        			<Link to={linkHref} className="landing-button link-no-style btn btn-primary" >
      					{ linkText }
    				</Link>
        		</Col>
      		</Row>
    	</Container>
    	)

}