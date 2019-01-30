import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>
                        CREATE NEW POST
                    </h1>
                    <form> 
                            <label for="postTitle">Title</label>
                            <input className="form-control" type="text" name="postTitle" id="postTitle"></input>
            
                            <label for="postContent">Content</label>
                            <textarea className="form-control" name="postContent" id="postContent"></textarea>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
  )
} 