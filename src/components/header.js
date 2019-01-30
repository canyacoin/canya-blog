import React from "react"
import { Link, StaticQuery, graphql } from "gatsby" 

export default () => (
    <StaticQuery 
        query={graphql`
            query {
                site {
                    siteMetadata{
                        title
                        description
                        logoUrl
                    }
                }
            }
        `
        } render = {data => (
        <nav className="navbar">
            <div className="container"> 
                <div className="row">
                     <div className="col-12">
                        <Link to={`/`} className="navbar-brand">
                           <img src={data.site.siteMetadata.logoUrl} alt="CanWork logo"></img>
                        </Link>        
                    </div> 
                </div>
            </div>
         </nav>
        )}
    />
)

