import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleSearch from "../components/article_search"
import ArticleList from "../components/article_list"

export default class LibraryPage extends React.Component {


	constructor(props) {
	    
	    super(props);
	    this.selectOrder = this.selectOrder.bind(this);
	    this.searchArticle = this.searchArticle.bind(this);

	    // Create initial array with all articles from graphql data
	    this.listAll = [];
	    const articlesData = this.props.data.allMarkdownRemark.nodes;
	  	const imagesData = this.props.data.allFile.nodes;
	  	console.log('--1-- Library is loaded -----');
	    for (let item of articlesData) {
	    	let listElement = {
	        	title: item.frontmatter.title,
	        	author: item.frontmatter.author,
	        	date: item.frontmatter.date,
	        	link: item.fields.slug,
	        	description: item.frontmatter.description,
	        	keywords: item.frontmatter.keywords
	      	};
	    	listElement.image = imagesData.find(image => item.fields.slug.includes(image.name)).publicURL;
	    	this.listAll.push(listElement);
	  	};
	  	console.log('All articles:');
	  	console.log(this.listAll);

	  	// Create initial array with selected articles
	  	this.listSelected = this.listAll.slice();

	  	// State includes the array of selected articles
	  	this.state = {
	  		articles: this.listSelected
	    }

	    // Init search string
	    this.initValue = {
			order: 'date',
			search: ''
		}

	}

	selectOrder(value) {

		if ( value === undefined ) value = 'date';

  		// Sort by property in value
		this.listSelected.sort(function(a, b) {
		  let propertyA = a[value].toUpperCase(); 
		  let propertyB = b[value].toUpperCase(); 
		  if (propertyA < propertyB) {
		    return -1;
		  }
		  if (propertyA > propertyB) {
		    return 1;
		  }
		  return 0;
		});
		// Reverse for sorting by date to begin from the last articles
		if ( value === 'date' ) this.listSelected.reverse();

		// Change
		this.setState({
			articles: this.listSelected
		});
  		console.log(`Order: ${value}`);
  		console.log('Selected Articles by Order:');
  		console.log(this.state.articles);
  	}

	searchArticle(value) {
  		
  		if ( value === '' ) {
  			this.listSelected = this.listAll.slice();
  		}
  		else {
  			this.listSelected = this.listSelected.filter(function(item){
  				// Search by title
  				return item.title.toLowerCase().includes(value.toLowerCase())
  			})
  		}

  		this.setState({
			articles: this.listSelected
		});

  		console.log(`Search: ${value}`);
  		console.log('Selected Articles by Search:');
  		console.log(this.state.articles);
  	}

  	componentDidMount() {

  		console.log('Initial sorting of mounted list');
  		this.selectOrder(this.initValue.order);
  		
  	}

	render() {

		return (
		  <Layout pageInfo={{ pageName: "library" }}>
		    <SEO title="Our Library" />
		    <h2>Our Library</h2>
		    <ArticleSearch selectOrder={this.selectOrder} searchArticle={this.searchArticle} initValue={this.initValue} />
		    <ArticleList articlesList={this.state.articles} />
		    <hr />
		    <Link to="/">Go back to the homepage</Link>
		  </Layout>
		)
	}

}

export const query = graphql`
    query  {
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
              keywords
            }
            fields {
              slug
            }
          }
        }
    }
`
