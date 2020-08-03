import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleSearch from "../components/article_search"
import ArticleList from "../components/article_list"

export default function LibraryPage(props) {

	const articlesData = props.data.allMarkdownRemark.nodes;
  	const imagesData = props.data.allFile.nodes;
  	console.log('--1-- Library is loaded -----');

  	let listAll = [];
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
    	listAll.push(listElement);
  	};
  	console.log('All articles:');
  	console.log(listAll);

  	let listStatus = {
  		order: 'title',
  		articles: listAll.slice()
  	};
  	console.log('List State:');
  	console.log(listStatus);

  	let listSelected = listStatus.articles;
  	console.log('Selected Articles:');
  	console.log(listSelected);

  	const selectOrder = (value) => {
  		listStatus.order = value;

  		// Sort by property in value
		listSelected.sort(function(a, b) {
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
		if ( value === 'date' ) listSelected.reverse();

  		console.log(`Order: ${listStatus.order}`);
  		console.log('Selected Articles by Order:');
  		console.log(listSelected);
  	};

  	const searchArticle = (value) => {
  		if ( value === '' ) {
  			listSelected = listAll;
  		}
  		else {
  			listSelected = listSelected.filter(function(item){
  				// Search by title
  				return item.title.toLowerCase().includes(value.toLowerCase())
  			})
  		}

  		console.log(`Search: ${value}`);
  		console.log('Selected Articles by Search:');
  		console.log(listSelected);
  	};

	return (
	  <Layout pageInfo={{ pageName: "library" }}>
	    <SEO title="Our Library" />
	    <h2>Our Library</h2>
	    <ArticleSearch selectOrder={selectOrder} searchArticle={searchArticle} />
	    <ArticleList articlesList={listSelected} />
	    <hr />
	    <Link to="/">Go back to the homepage</Link>
	  </Layout>
	)

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
