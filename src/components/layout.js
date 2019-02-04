import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { StaticQuery, graphql } from "gatsby"
// in angular, this is basically app.component
export default ({ children }) => (
  <StaticQuery
  query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={data => (
    <main>
    <Header/> 
        <br></br>
        {children} 
    <Footer/>
  </main>
  )}
  />
)