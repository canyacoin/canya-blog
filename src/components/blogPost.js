import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function BlogPost (props) {
  const post = props.data.markdownRemark;
  const {title, date} = post.frontmatter;
  return (
    <Layout>
    <SEO title={title}></SEO>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{title}</h1>
            <p>{date}</p>
            <br></br>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default BlogPost

export const query = graphql `
  query PostQuery($slug: String!){
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
          title
          date
      }
    }
  }
`