import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby'
import SEO from "../components/seo"

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return(
    <Layout>
    <SEO title="CanWork Blog"></SEO>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>The CanWork Blog</h1>
            <p>Get the latest news, updates, and other interesting resources for your CryptoFreelance life here.</p>
          </div>
        </div>
        {postList.edges.map(({ node }, i) => (
            <div key={`row`+i}  className="row">
              <div key={`col`+i}  className="col-12">
              <Link to={node.fields.slug} key={`link_`+i} className="link">
                  <h1 key={`title_`+i} >{node.frontmatter.title}</h1></Link>
                  <span key={`date_`+i} >{node.frontmatter.date}</span>
                  <p key={`excerpt_`+i} >{node.excerpt}</p>
              </div>
            </div> 
        ))}
      </div>
    </Layout>
  )
} 

export default IndexPage;
export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`